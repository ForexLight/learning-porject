import * as React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import Main from '../Main/Main'
import Registration from './Registration'

describe('FILTER CONTROLLER COMPONENT TEST', () => {
  const setup = () => {
    const utils = render(
      <BrowserRouter>
        <Provider store={store}>
          <Registration setVisibleNav={() => null} />
          <Main />
        </Provider>
      </BrowserRouter>,
    )
    const inputEmail = utils.getByTestId('email-input')
    const inputPass = utils.getByTestId('pass-input')
    return {
      inputEmail,
      inputPass,
      ...utils,
    }
  }

  test('expect to display ', () => {
    const { getByTestId } = setup()
    const linkElement = getByTestId('registration-wrapper')
    expect(linkElement).toBeInTheDocument()
  })
  test('expect to show errors', () => {
    const { getByTestId } = setup()
    const btn = getByTestId('main-btn')
    fireEvent.click(btn)
    waitFor(() => expect(getByTestId('error-notification')).toBeInTheDocument())
  })
  test('expect to show errors in inputs', () => {
    const { inputEmail, inputPass, getByTestId } = setup()
    fireEvent.change(inputEmail, { target: { value: '123' } })
    fireEvent.change(inputPass, { target: { value: '123' } })
    waitFor(() => expect(getByTestId('email-error')).toBeInTheDocument())
    waitFor(() => expect(getByTestId('pass-error')).toBeInTheDocument())
  })
  test('expect to redirect if success', () => {
    const { inputEmail, inputPass, getByTestId } = setup()
    fireEvent.change(inputEmail, { target: { value: '123@gmail.com' } })
    fireEvent.change(inputPass, { target: { value: '123123qWWq!' } })

    fireEvent.click(getByTestId('main-btn'))
    waitFor(() => expect(getByTestId('main-component')).toBeInTheDocument())
  })
})

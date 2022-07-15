import * as React from 'react'
import { cleanup, fireEvent, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Login from './Login'
import Main from '../Main/Main'

beforeAll(() => {
  jest.spyOn(global.console, 'warn').mockImplementation(() => null)
})

afterEach(cleanup)

const setup = () => {
  const utils = render(
    <BrowserRouter>
      <Login setVisibleNav={() => null} />
      <Main />
    </BrowserRouter>,
  )
  const inputEmail = utils.getByLabelText('Email')
  const inputPass = utils.getByLabelText('Pass')
  return {
    inputEmail,
    inputPass,
    ...utils,
  }
}

test('should display ', () => {
  const { getByText } = setup()
  const linkElement = getByText(/Login page/i)
  expect(linkElement).toBeInTheDocument()
})
test('should display warn', () => {
  const { getByTestId } = setup()
  const btn = getByTestId('login-btn')
  fireEvent.click(btn)
  expect(console.warn).toBeCalledWith('error in date')
})
test('should display warn with input data', () => {
  const { inputEmail, getByTestId } = setup()
  fireEvent.change(inputEmail, { target: { value: '123' } })
  const btn = getByTestId('login-btn')
  fireEvent.click(btn)
  expect(console.warn).toBeCalledWith('error in date')
})
test('should work with all input data', () => {
  const { inputEmail, inputPass, getByTestId, getByText } = setup()
  fireEvent.change(inputEmail, { target: { value: '123' } })
  fireEvent.change(inputPass, { target: { value: '123' } })
  const btn = getByTestId('login-btn')
  fireEvent.click(btn)
  const linkElement = getByText(/Vlad/i)
  expect(linkElement).toBeInTheDocument()
})

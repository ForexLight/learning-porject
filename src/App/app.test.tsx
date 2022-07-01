import * as React from 'react'
import { render } from '@testing-library/react'
import { App } from '../App/App'

it('should display ', () => {
  const { getByText } = render(<App userName='vlad' lang='US' />)
  const linkElement = getByText(/Hi vlad from React! Welcome to US!/i)
  expect(linkElement).toBeInTheDocument()
})

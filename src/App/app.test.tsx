import * as React from 'react'
import { render } from '@testing-library/react'
import App from './App'

it('should display ', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Hello world/i)
  expect(linkElement).toBeInTheDocument()
})

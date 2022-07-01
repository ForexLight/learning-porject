import * as React from 'react'
import { act } from 'react-dom/test-utils'
import * as ReactDOM from 'react-dom'
import someFunc from './someFunc'

it('should display ', () => {
  expect(someFunc()).toBe(5)
})

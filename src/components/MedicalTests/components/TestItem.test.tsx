import * as React from 'react'
import { render, screen } from '@testing-library/react'
import TestItem from './TestItem'
import { data } from '../Types'

describe('FILTER CONTROLLER COMPONENT TEST', () => {
  test('expect to render', () => {
    render(<TestItem data={data[0]} />)
    expect(screen.getByTestId('test-item-component')).toBeInTheDocument()
  })
})

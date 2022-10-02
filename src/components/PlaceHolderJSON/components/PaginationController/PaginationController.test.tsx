import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import PaginationController from './PaginationController'

describe('PAGINATION CONTROLLER COMPONENT TEST', () => {
  const mockSetPageCallback = jest.fn()
  const mockNextPageCallback = jest.fn()
  const mockPrevPageCallback = jest.fn()
  beforeEach(() => {})
  test('expect to render', async () => {
    render(
      <PaginationController
        nextPage={mockNextPageCallback}
        page={1}
        prevPage={mockPrevPageCallback}
        setPage={mockSetPageCallback}
        totalPages={5}
      />,
    )
    expect(screen.getByTestId('pagination-container')).toBeInTheDocument()
  })
  test('expect to render page indicators', () => {
    render(
      <PaginationController
        nextPage={mockNextPageCallback}
        page={1}
        prevPage={mockPrevPageCallback}
        setPage={mockSetPageCallback}
        totalPages={5}
      />,
    )
    expect(screen.getAllByTestId('page-indicator').length).toBe(5)
  })
  test('expect to button work', () => {
    render(
      <PaginationController
        nextPage={mockNextPageCallback}
        page={1}
        prevPage={mockPrevPageCallback}
        setPage={mockSetPageCallback}
        totalPages={5}
      />,
    )

    fireEvent.click(screen.getByTestId('prev-page-container'))
    expect(mockPrevPageCallback.mock.calls.length).toBe(1)
    fireEvent.click(screen.getByTestId('next-page-container'))
    expect(mockNextPageCallback.mock.calls.length).toBe(1)
    screen
      .getAllByTestId('page-indicator')
      .reverse()
      .forEach((i) => {
        fireEvent.click(i)
      })
    expect(mockSetPageCallback.mock.calls.length).toBe(5)
  })
})

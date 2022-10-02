import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import FilterController from './FilterController'

describe('FILTER CONTROLLER COMPONENT TEST', () => {
  const mockSetIsLikedShow = jest.fn()
  const mockSetPageCallback = jest.fn()
  const mockSetSearchQueryCallback = jest.fn()
  const mockSetSelectIdCallback = jest.fn()
  const users = [
    {
      id: '1',
      name: 'user1',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
    {
      id: '2',
      name: 'user2',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
    {
      id: '3',
      name: 'user3',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
    {
      id: '4',
      name: 'user4',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
    {
      id: '5',
      name: 'user5',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    },
  ]
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('expect to render', () => {
    render(
      <FilterController
        setIsLikedShow={mockSetIsLikedShow}
        setPage={mockSetPageCallback}
        setSearchQuery={mockSetSearchQueryCallback}
        setSelectId={mockSetSelectIdCallback}
        users={users}
      />,
    )

    expect(screen.getByTestId('filter-component')).toBeInTheDocument()
  })
  test('expect to render all user options', () => {
    render(
      <FilterController
        setIsLikedShow={mockSetIsLikedShow}
        setPage={mockSetPageCallback}
        setSearchQuery={mockSetSearchQueryCallback}
        setSelectId={mockSetSelectIdCallback}
        users={users}
      />,
    )

    expect(screen.getAllByTestId('user-option').length).toBe(users.length)
  })
  test('expect to switch isLiked indicator', () => {
    render(
      <FilterController
        setIsLikedShow={mockSetIsLikedShow}
        setPage={mockSetPageCallback}
        setSearchQuery={mockSetSearchQueryCallback}
        setSelectId={mockSetSelectIdCallback}
        users={users}
      />,
    )
    const radioFirst = screen.getByTestId('choice-1') as HTMLInputElement
    const radioSecond = screen.getByTestId('choice-2') as HTMLInputElement

    expect(radioSecond.checked).toEqual(false)
    expect(radioFirst.checked).toEqual(false)
    fireEvent.click(screen.getByTestId('choice-1'))
    expect(radioSecond.checked).toEqual(false)
    expect(radioFirst.checked).toEqual(true)

    fireEvent.click(screen.getByTestId('choice-2'))
    expect(radioSecond.checked).toEqual(true)
    expect(radioFirst.checked).toEqual(false)
  })
  test('expect to call callbacks in switching isLiked indicator', () => {
    render(
      <FilterController
        setIsLikedShow={mockSetIsLikedShow}
        setPage={mockSetPageCallback}
        setSearchQuery={mockSetSearchQueryCallback}
        setSelectId={mockSetSelectIdCallback}
        users={users}
      />,
    )
    const radioFirst = screen.getByTestId('choice-1') as HTMLInputElement
    const radioSecond = screen.getByTestId('choice-2') as HTMLInputElement

    fireEvent.click(radioFirst)
    fireEvent.click(radioSecond)

    expect(mockSetPageCallback.mock.calls.length).toBe(2)
    expect(mockSetIsLikedShow.mock.calls.length).toBe(2)
  })
})

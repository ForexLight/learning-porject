import { render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Post from './Post'

describe('POST COMPONENT TEST', () => {
  test('expect to render', async () => {
    render(
      <MemoryRouter>
        <Post />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('post-component')).toBeInTheDocument()
  })
})

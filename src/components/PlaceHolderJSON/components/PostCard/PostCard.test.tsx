import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import PostCard from './PostCard'

describe('POSTCARD COMPONENT TEST', () => {
  const mockDeletePostCallback = jest.fn()
  const mockLikePostCallback = jest.fn()
  const likedPosts = [
    {
      id: '',
      userId: '',
      title: '',
      body: '',
    },
  ]
  const post = {
    id: '',
    userId: '',
    title: '',
    body: '',
  }
  test('expect to render', async () => {
    render(
      <MemoryRouter>
        <PostCard
          deletePost={mockDeletePostCallback}
          likePost={mockLikePostCallback}
          likedPosts={likedPosts}
          post={post}
        />
      </MemoryRouter>,
    )
    expect(screen.getByTestId('post-card-component')).toBeInTheDocument()
  })
  test('expect to call likePostCallback and deletePostCallback', () => {
    render(
      <MemoryRouter>
        <PostCard
          deletePost={mockDeletePostCallback}
          likePost={mockLikePostCallback}
          likedPosts={likedPosts}
          post={post}
        />
      </MemoryRouter>,
    )
    fireEvent.click(screen.getByTestId('post-like-btn'))
    expect(mockLikePostCallback.mock.calls.length).toBe(1)
    fireEvent.click(screen.getByTestId('post-delete-btn'))
    expect(mockDeletePostCallback.mock.calls.length).toBe(1)
  })
})

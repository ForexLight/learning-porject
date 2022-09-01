import React, { useState } from 'react'
import styled from 'styled-components'
import { PostTypes } from '../Types'
import Button from '../../shared/Button/Button'

const PostStyled = styled.article<PostStyledType>`
  color: black;
  background-color: ${(props) => (props.like ? 'red' : 'white')};
`
const PostTitle = styled.h3``
const PostText = styled.p``

type PostStyledType = {
  like: boolean
}

interface OwnProps {
  post: PostTypes
  deletePost: (id: string) => void
  likePost: (i: PostTypes) => void
}

type Props = OwnProps

const Post: React.FC<Props> = ({ post, likePost, deletePost }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false)
  return (
    <PostStyled like={isLiked}>
      <PostTitle>{post.title}</PostTitle>
      <PostText>{post.body}</PostText>
      <Button
        text='like'
        onClick={() => {
          setIsLiked(!isLiked)
          likePost(post)
        }}
        size='20%'
        type='regular'
      />
      <Button
        text='delete'
        onClick={() => {
          deletePost(post.id)
        }}
        size='20%'
        type='regular'
      />
    </PostStyled>
  )
}

export default Post

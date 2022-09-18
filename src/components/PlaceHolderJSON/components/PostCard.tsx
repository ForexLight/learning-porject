import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostTypes } from '../Types'
import Button from '../../shared/Button/Button'
import {
  PostButtonContainer,
  PostInfoContainer,
  PostStyled,
  PostText,
  PostTitle,
} from './PostCard.styles'

interface OwnProps {
  post: PostTypes
  deletePost: (id: string) => void
  likePost: (i: PostTypes) => void
  likedPosts: PostTypes[]
}

type Props = OwnProps

const PostCard: React.FC<Props> = ({ post, likePost, deletePost, likedPosts }) => {
  const navigate = useNavigate()

  const [isLiked, setIsLiked] = useState<boolean>(
    likedPosts.filter((i) => i.id === post.id).length > 0,
  )

  return (
    <PostStyled like={isLiked}>
      <PostInfoContainer>
        <PostTitle
          onClick={() => {
            navigate(`${post.id}`)
          }}
        >
          {post.title}
        </PostTitle>
        <PostText>{post.body}</PostText>
      </PostInfoContainer>
      <PostButtonContainer>
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
      </PostButtonContainer>
    </PostStyled>
  )
}

export default PostCard

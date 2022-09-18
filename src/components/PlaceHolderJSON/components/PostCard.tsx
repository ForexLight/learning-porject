import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { PostTypes, UserTypes } from '../Types'
import Button from '../../shared/Button/Button'

const PostStyled = styled.article<PostStyledType>`
  color: black;
  background-color: ${(props) => (props.like ? 'rgba(255, 93, 93, 0.57)' : 'white')};
  display: flex;
  border-radius: 20px;
  border: 1px solid black;
  padding: 5px;
  align-items: center;
  justify-content: center;
  height: 150px;
  margin: 15px;
`
const PostInfoContainer = styled.div`
  padding-left: 10px;
  width: 80%;
  flex-grow: 3;
`
const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;

  button {
    width: 80px;
  }
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
  likedPosts: PostTypes[]
}

type Props = OwnProps

const PostCard: React.FC<Props> = ({ post, likePost, deletePost, likedPosts }) => {
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState<boolean>(
    // eslint-disable-next-line no-magic-numbers
    likedPosts.filter((i) => i.id === post.id).length > 0,
  )
  const [userData, setUserData] = useState<UserTypes | unknown>({})
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then((res) => res.json())
      .then((res) => setUserData(res))
  }, [])
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

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentTypes, PostTypes, UserTypes } from '../Types'
import { mockedPostData, mockedUserData } from '../mokedData'
import Loader from '../../shared/Loader/Loader'
import {
  CommentBody,
  CommentItem,
  CommentsContainer,
  CommentTitle,
  PostContainer,
  PostData,
  PostTitle,
  TopLinks,
  UserContacts,
  UserData,
} from './Post.styles'

const Post: React.FC = () => {
  const navigate = useNavigate()
  const postId = useParams().id
  const [postData, setPostData] = useState<PostTypes>(mockedPostData)
  const [postComments, setPostComments] = useState<CommentTypes[] | []>([])
  const [userData, setUserData] = useState<UserTypes>(mockedUserData)
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((res) => setPostData(res))
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.json())
      .then((res) => setPostComments(res))
  }, [])
  useEffect(() => {
    const waitingTime = 1000
    fetch(`https://jsonplaceholder.typicode.com/users/${postData.userId}`)
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .then(() =>
        setTimeout(() => {
          setIsLoaded(true)
        }, waitingTime),
      )
  }, [postData.userId])

  const formattedImgUrl = userData.name ? userData.name.split(' ').join('+') : ''
  return (
    <>
      {isLoaded ? null : <Loader />}
      <PostContainer>
        <TopLinks
          onClick={() => {
            navigate(-1)
          }}
        >
          Back
        </TopLinks>
        <PostTitle>{postData.title}</PostTitle>
        <PostData>{postData.body}</PostData>
        <UserData>
          <img src={`https://eu.ui-avatars.com/api/?name=${formattedImgUrl}`} alt='userImg' />
          <UserContacts>
            <span>{userData.name}</span>
            <span>{userData.email}</span>
          </UserContacts>
        </UserData>
      </PostContainer>
      <CommentsContainer>
        <h3>Comments:</h3>
        {postComments.map((i) => (
          <CommentItem key={i.id}>
            <CommentTitle>
              <h4>{i.name}</h4>
              <span>{i.email}</span>
            </CommentTitle>
            <CommentBody>{i.body}</CommentBody>
          </CommentItem>
        ))}
      </CommentsContainer>
    </>
  )
}

export default Post

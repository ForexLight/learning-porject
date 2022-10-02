import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CommentTypes, PostTypes, UserTypes } from '../../Types'
import { mockedPostData, mockedUserData } from '../../mokedData'
import Loader from '../../../shared/Loader/Loader'
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

  const getData = async () => {
    let isOk = false
    const waitingTime = 1000
    const postInfo = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.data)
      .catch((e) => {
        isOk = false
      })
    setPostData(postInfo)
    const comments = await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((res) => res.data)
      .catch((e) => {
        isOk = false
      })

    setPostComments(comments)
    const user = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((res) => setUserData(res.data))
      .then(() =>
        setTimeout(() => {
          setIsLoaded(true)
        }, waitingTime),
      )
      .catch((e) => {
        isOk = false
      })
    return isOk
  }

  useEffect(() => {
    getData()
  }, [])

  const formattedImgUrl = userData.name ? userData.name.split(' ').join('+') : ''
  return (
    <>
      {isLoaded ? null : <Loader />}
      <PostContainer data-testid='post-component'>
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

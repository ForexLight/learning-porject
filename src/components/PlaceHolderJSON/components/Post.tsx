import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentTypes, PostTypes, UserTypes } from '../Types'
import { mockedUserData } from '../mokedData'
import Loader from '../../shared/Loader/Loader'

const PostContainer = styled.section`
  background-color: #f2f59d;
  padding: 0 30px 20px 30px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const TopLinks = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  align-items: flex-start;
  text-decoration: underline;
`
const PostTitle = styled.h2`
  align-self: flex-start;
  margin-top: 200px;
  font-size: 32px;

  &:first-letter {
    text-transform: capitalize;
  }
`
const PostData = styled.p`
  font-size: 24px;
`
const UserData = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
`
const UserContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    white-space: nowrap;
    align-self: flex-start;
    padding-left: 10px;

    &:last-child {
      margin-top: 5px;
    }
  }
`
const CommentsContainer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: black;
`
const CommentItem = styled.article`
  background-color: rgba(132, 255, 200, 0.32);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 10px;
`

const CommentTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 26px;

  h4 {
    margin-bottom: 5px;
  }

  span {
    font-size: 18px;
    color: darkgrey;
  }
`
const CommentBody = styled.p`
  font-size: 22px;
`

const Post: React.FC = () => {
  const navigate = useNavigate()
  const postId = useParams().id
  const [postData, setPostData] = useState<PostTypes>({
    id: '',
    userId: '',
    title: '',
    body: '',
  })
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

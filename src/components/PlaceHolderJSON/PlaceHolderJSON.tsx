import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../shared/Input/Input'
import { PostTypes, UserTypes } from './Types'
import PostCard from './components/PostCard'
import usePagination from '../../hooks/usePagination'
import PaginationController from './components/PaginationController'

const PlaceHolderContainer = styled.div``
const PostContainer = styled.section``
const PlaceHolderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 20px;
`
const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 0 10px;
  width: 200px;
  font-size: 18px;
  font-weight: bold;
`

const PlaceHolderJSON: React.FC = () => {
  const [data, setData] = useState<PostTypes[] | []>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [users, setUsers] = useState<UserTypes[] | []>([])
  const [selectId, setSelectId] = useState<string>('')
  const [likedPosts, setLikedPosts] = useState<PostTypes[] | []>([])
  const [isLikedShow, setIsLikedShow] = useState<boolean>(false)

  const filterPosts = () =>
    isLikedShow
      ? likedPosts
          .filter((i) => i.title.includes(searchQuery))
          .filter((i) => (selectId !== '0' && selectId !== '' ? `${i.userId}` === selectId : i))
      : data
          .filter((i) => i.title.includes(searchQuery))
          .filter((i) => (selectId !== '0' && selectId !== '' ? `${i.userId}` === selectId : i))
  const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, setPage, totalPages } =
    usePagination({
      contentPerPage: 5,
      count: filterPosts().length,
    })
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => {
        throw new Error(e)
      })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((e) => {
        throw new Error(e)
      })
  }, [])

  const deletePost = (id: string): void => {
    setLikedPosts(likedPosts.filter((i) => i.id !== id))
    setData(data.filter((i) => i.id !== id))
  }
  const likePost = (i: PostTypes): void => {
    if (likedPosts.find((element) => element.id === i.id)) {
      setLikedPosts(likedPosts.filter((item) => item.id !== i.id))
    } else {
      setLikedPosts([...likedPosts, i])
    }
  }

  const posts = filterPosts()
    .map((i) => (
      <PostCard
        key={i.id}
        post={i}
        deletePost={deletePost}
        likePost={likePost}
        likedPosts={likedPosts}
      />
    ))
    .slice(firstContentIndex, lastContentIndex)
  return (
    <PlaceHolderContainer>
      <PlaceHolderNav>
        <Input
          isError
          label=''
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='search'
        />
        <select name='selectUsers' id='selectUsers' onChange={(e) => setSelectId(e.target.value)}>
          <option value='0'>choose user</option>
          {users.map((i) => (
            <option value={i.id} key={i.id}>
              user with {i.id}
            </option>
          ))}
        </select>
        <RadioGroup>
          <label htmlFor='contactChoice1'>
            <input
              type='radio'
              id='contactChoice1'
              name='contact'
              value='email'
              onClick={() => {
                setPage(0)
                setIsLikedShow(true)
              }}
            />
            Show liked
          </label>
          <label htmlFor='contactChoice2'>
            <input
              type='radio'
              id='contactChoice2'
              name='contact'
              value='phone'
              onClick={() => {
                setPage(0)
                setIsLikedShow(false)
              }}
            />
            Show all
          </label>
        </RadioGroup>
      </PlaceHolderNav>

      <PostContainer>{posts}</PostContainer>
      <PaginationController
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
        setPage={setPage}
        totalPages={totalPages}
      />
    </PlaceHolderContainer>
  )
}

export default PlaceHolderJSON

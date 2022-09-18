import React, { useEffect, useState } from 'react'
import { PostTypes, UserTypes } from './Types'
import PostCard from './components/PostCard'
import usePagination from '../../hooks/usePagination'

import { PlaceHolderContainer, PostContainer } from './PlaceHolderJSON.styles'

import PaginationController from './components/PaginationController'
import FilterController from './components/FilterController'

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
      <FilterController
        setPage={setPage}
        setIsLikedShow={setIsLikedShow}
        setSearchQuery={setSearchQuery}
        setSelectId={setSelectId}
        users={users}
      />
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

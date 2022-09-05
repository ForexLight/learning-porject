import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Input from '../shared/Input/Input'
import { PostTypes } from './Types'
import PostCard from './components/PostCard'

const PlaceHolderContainer = styled.div``
const PostContainer = styled.section``

interface OwnProps {}

type Props = OwnProps

const PlaceHolderJSON: React.FC<Props> = () => {
  const [data, setData] = useState<PostTypes[] | []>([])
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [likedPost, setLikedPost] = useState<PostTypes[] | []>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((e) => console.log(e))
  }, [])

  const deletePost = (id: string): void => {
    setData(data.filter((i) => i.id !== id))
  }
  const likePost = (i: PostTypes): void => {
    setLikedPost([...likedPost, i])
  }
  const filterByQuery = () => data.filter((i) => i.title.includes(searchQuery))
  const posts = data
    ? filterByQuery().map((i) => (
        <PostCard key={i.id} post={i} deletePost={deletePost} likePost={likePost} />
      ))
    : null
  return (
    <PlaceHolderContainer>
      <Input isError label='' onChange={(e) => setSearchQuery(e.target.value)} />
      <PostContainer>{posts}</PostContainer>
    </PlaceHolderContainer>
  )
}

export default PlaceHolderJSON

import styled from 'styled-components'
import { PostStyledType } from '../../Types'

export const PostStyled = styled.article<PostStyledType>`
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
export const PostInfoContainer = styled.div`
  padding-left: 10px;
  width: 80%;
  flex-grow: 3;
`
export const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 200px;

  button {
    width: 80px;
  }
`
export const PostTitle = styled.h3``
export const PostText = styled.p``

import styled from 'styled-components'

export const PostContainer = styled.section`
  background-color: #f2f59d;
  padding: 0 30px 20px 30px;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const TopLinks = styled.div`
  display: flex;
  padding-top: 10px;
  width: 100%;
  align-items: flex-start;
  text-decoration: underline;
`
export const PostTitle = styled.h2`
  align-self: flex-start;
  margin-top: 200px;
  font-size: 32px;

  &:first-letter {
    text-transform: capitalize;
  }
`
export const PostData = styled.p`
  font-size: 24px;
`
export const UserData = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
`
export const UserContacts = styled.div`
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
export const CommentsContainer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  color: black;
`
export const CommentItem = styled.article`
  background-color: rgba(132, 255, 200, 0.32);
  border-radius: 20px;
  display: flex;
  flex-wrap: wrap;
  padding: 0 20px;
  margin: 10px;
`

export const CommentTitle = styled.div`
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
export const CommentBody = styled.p`
  font-size: 22px;
`

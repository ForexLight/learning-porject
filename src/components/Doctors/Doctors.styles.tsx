import styled from 'styled-components'

export const DoctorsContainer = styled.div`
  background-color: red;
  color: black;
  width: 100%;

  a {
    text-decoration: none;
    color: black;
  }
`
export const DoctorsItem = styled.div`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: blue;
  margin: 5px;

  img {
    border-radius: 20px 0 0 20px;
    max-width: 130px;
  }

  div {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    padding-right: 10px;
  }
`

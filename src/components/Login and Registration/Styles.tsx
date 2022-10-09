import styled from 'styled-components'

export const LoginWrapper = styled.section`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  height: 100vh;
  font-size: 20px;
  @media (min-width: 542px) {
    flex-direction: row;
    padding: 0;
  }
  @media (min-width: 766px) {
  }
`
export const Greeting = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    &:nth-child(1) {
      font-size: 42px;
      font-weight: 600;
    }

    &:nth-child(2) {
      font-size: 35px;
      font-weight: 500;
    }
  }
`

export const Logo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
    width: 225px;
  }

  @media (min-width: 542px) {
    width: 49%;
    margin-bottom: 0;
    flex: 1;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.05);
    img {
      height: 300px;
      width: 400px;
    }
  }

  @media (min-width: 1200px) {
    flex: 2;
  }
`

export const LoginForm = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    padding-top: 5px;
    font-size: 14px;
  }

  input {
    width: 90%;
    height: 40px;
    padding-bottom: 5px;
  }

  @media (min-width: 542px) {
    width: 49%;
    margin: 0;
    padding: 0;
    flex: 1;
  }
`

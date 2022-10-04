import styled from 'styled-components'

export const GreetingStyled = styled.section`
  margin-top: 10px;
  display: flex;
  min-height: 150px;
  width: 100%;
  background-color: green;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  font-size: 16px;
  justify-content: center;
  flex-direction: column;

  img {
    width: 100px;
  }

  @media (min-width: 766px) {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`
export const AdditionalInformation = styled.div`
  font-size: 14px;
  display: flex;
  background-color: greenyellow;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  padding: 10px;

  ul {
    padding: 0 10px;
    list-style-type: none;
    margin: 0;

    li {
      padding: 5px 0;
      font-weight: bold;
    }

    li > span {
      font-weight: normal;
      color: #ff6461;
    }
  }

  @media (min-width: 542px) {
    width: 100%;
  }
  @media (min-width: 766px) {
    height: 150px;
    font-size: 18px;
    width: 60%;
  }
  @media (min-width: 1200px) {
    width: 45%;
  }
`
export const Separator = styled.div`
  width: 5px;
  height: 70px;
  align-self: center;
  background-color: darkgray;
  justify-self: center;
`
export const MainInformation = styled.div`
  padding: 10px;
  display: flex;
  width: 300px;
  justify-content: space-between;
`

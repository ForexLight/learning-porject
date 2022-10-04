import styled from 'styled-components'

export const BmiCalculatorContainer = styled.section`
  flex: 1;
  margin: 5px;
  border-radius: 20px;
  background-color: #fffe8d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding: 30px 10px;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 542px) {
    height: 35%;
  }
  @media (min-width: 766px) {
    font-size: 18px;
  }
  @media (min-width: 1200px) {
  }
`
export const BmiStatus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.color};
  border-radius: 20px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  @media (min-width: 542px) {
    height: 75px;
  }
`
export const BodyStatus = styled.div`
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  width: 65%;

  span {
    margin: 5px 0;
  }

  @media (min-width: 542px) {
    height: 75px;
  }
`

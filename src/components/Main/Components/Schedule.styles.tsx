import styled from 'styled-components'

export const ScheduleContainer = styled.section`
  background-color: gold;
  border-radius: 20px;
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 75px;
  @media (min-width: 542px) {
    margin-bottom: auto;
    height: 100%;
    width: 100%;
  }
`
export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  margin-top: 10px;

  div {
    width: 50%;
    display: flex;
    flex-direction: column;

    span {
      margin-top: 5px;
    }
  }
`

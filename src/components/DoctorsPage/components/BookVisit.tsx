import React, { useState } from 'react'
import styled from 'styled-components'
import getWeeksDay from '../../../helpers/getWeeksDay'
import getHours from '../../../helpers/getHours'
import Button from '../../shared/Button/Button'
import login from '../../Login/Login'

const BookVisitContainer = styled.div`
  h3 {
    padding-left: 10px;
    margin: 0;
  }
  width: 100%;
  height: 100%;
  margin-bottom: 70px;
`

const ChooseDayContainer = styled.div`
  overflow: scroll;
  display: flex;
  align-items: center;
  padding: 20px 0;
  height: 160px;
  background-color: green;
`

const DayContainer = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 130px;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 20px;
  span {
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 130px;
  }
`

const ChooseTimeContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: green;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

const TimeContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  width: 20%;
  padding: 20px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BookVisit: React.FC = () => {
  const [chooseDay, setChooseDay] = useState('')
  const [chooseTime, setChooseTime] = useState('')
  const day = getWeeksDay(new Date())
  const time = getHours(new Date())
  const dayNodes = day.map((i) => (
    <DayContainer key={i.id}>
      <span>{i.day}</span>
      <span>{i.date}</span>
    </DayContainer>
  ))
  const timeNodes = time.map((i) => <TimeContainer key={i}>{i}</TimeContainer>)
  return (
    <BookVisitContainer>
      <h3>Choose day</h3>
      <ChooseDayContainer>{dayNodes}</ChooseDayContainer>
      <h3>Choose time</h3>
      <ChooseTimeContainer>{timeNodes}</ChooseTimeContainer>
      <Button onClick={() => console.log(1)} size='100%' type='regular' text='book visit' />
    </BookVisitContainer>
  )
}

export default BookVisit

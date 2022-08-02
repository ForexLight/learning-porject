import React, { useState } from 'react'
import styled from 'styled-components'
import getWeeksDay from '../../../helpers/getWeeksDay'
import getHours from '../../../helpers/getHours'
import Button from '../../shared/Button/Button'
import { useAppDispatch } from '../../../hooks'
import { addScheduleItem } from '../../../store/slices/scheduleSlice'

const BookVisitContainer = styled.div`
  color: black;

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

  &::-webkit-scrollbar {
    display: none;
  }
`

const DayContainer = styled.div<ContainerType>`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 130px;
  padding: 20px;
  margin: 5px;
  border-radius: 20px;
  background-color: ${(props) => (props.active ? '#22ff00' : 'rgba(136,136,136,0.25)')};

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
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`

const TimeContainer = styled.div<ContainerType>`
  border-radius: 20px;
  margin: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? 'green' : 'gray')};
`
type ContainerType = {
  active: boolean
}
type ChooseDayType = {
  date: string
  day: string
  id: string
}
const BookVisit: React.FC = () => {
  const dispatcher = useAppDispatch()
  const [chooseDay, setChooseDay] = useState<ChooseDayType>({
    date: '',
    day: '',
    id: '',
  })
  const [chooseTime, setChooseTime] = useState('')
  const day = getWeeksDay(new Date())
  const time = getHours(new Date())
  const dateFormatter = () => {
    const date = new Date(chooseDay.id)
    const hours = chooseTime.split(':')
    date.setHours(Number(hours[0]))
    date.setMinutes(Number(hours[1]))
    date.setSeconds(0)
    dispatcher(
      addScheduleItem({
        id: `${new Date()}`,
        date: `${date}`,
        info: 'new info',
        place: 'doctors place',
      }),
    )
  }
  const dayNodes = day.map((i) => (
    <DayContainer key={i.id} onClick={() => setChooseDay(i)} active={i.date === chooseDay.date}>
      <span>{i.day}</span>
      <span>{i.date}</span>
    </DayContainer>
  ))
  const timeNodes = time.map((i) => (
    <TimeContainer key={i} onClick={() => setChooseTime(i)} active={i === chooseTime}>
      {i}
    </TimeContainer>
  ))
  return (
    <BookVisitContainer>
      <h3>Choose day</h3>
      <ChooseDayContainer>{dayNodes}</ChooseDayContainer>
      <h3>Choose time</h3>
      <ChooseTimeContainer>{timeNodes}</ChooseTimeContainer>
      <Button onClick={() => dateFormatter()} size='100%' type='regular' text='book visit' />
    </BookVisitContainer>
  )
}

export default BookVisit

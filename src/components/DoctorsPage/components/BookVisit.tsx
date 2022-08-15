import React, { useEffect, useState } from 'react'
import { addScheduleItem } from '../../../store/slices/scheduleSlice'

import { useAppDispatch, useAppSelector } from '../../../hooks'

import getWeeksDay, { getDayFormatted } from '../../../helpers/getWeeksDay'
import getHours, { getStringTime } from '../../../helpers/getHours'
import Button from '../../shared/Button/Button'
import { ChooseDayType } from './Types'
import {
  BookVisitContainer,
  ChooseDayContainer,
  ChooseTimeContainer,
  DayContainer,
  TimeContainer,
} from './Styles'

const BookVisit: React.FC = () => {
  const dispatcher = useAppDispatch()
  const schedule = useAppSelector((state) => state.schedule)
  const [chooseDay, setChooseDay] = useState<ChooseDayType>({
    date: '',
    day: '',
    id: '',
  })
  const [chooseTime, setChooseTime] = useState('')

  useEffect(() => {
    setChooseTime('')
  }, [chooseDay.day])

  const dateFormatter = () => {
    const date = new Date(chooseDay.id)
    const hours = chooseTime.split(':')
    date.setHours(Number(hours[0]))
    date.setMinutes(Number(hours[1]))
    date.setSeconds(0)
    dispatcher(
      addScheduleItem({
        id: `${new Date().getTime()}`,
        date: `${new Date(date)}`,
        info: 'new info',
        place: 'doctors place',
      }),
    )
  }
  const dayNodes = getWeeksDay(new Date()).map((i) => (
    <DayContainer
      key={i.id}
      onClick={() => setChooseDay(i)}
      active={i.date === chooseDay.date}
      isInactive={false}
    >
      <span>{i.day}</span>
      <span>{i.date}</span>
    </DayContainer>
  ))
  const timeNodes = getHours(new Date()).map((i) => {
    let isDisabled = false
    schedule.forEach((item) => {
      if (
        getStringTime(new Date(item.date)) === i &&
        getDayFormatted(new Date(item.date)) === chooseDay.day
      ) {
        isDisabled = true
      }
    })
    return (
      <TimeContainer
        key={i}
        onClick={() => setChooseTime(i)}
        active={i === chooseTime}
        isInactive={isDisabled}
      >
        {i}
      </TimeContainer>
    )
  })
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

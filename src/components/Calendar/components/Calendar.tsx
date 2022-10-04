import React from 'react'
import {
  CalendarContainer,
  DatesContainer,
  DayContainer,
  DayContainerActive,
  DayContainerInActive,
  DayNames,
} from './Calendar.styles'
import { CalendarProps } from '../Types'

const Calendar: React.FC<CalendarProps> = ({ time, setActive, active }) => {
  const MONTH_AMOUNT = 12
  const WEEKDAYS_AMOUNT = 7

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const getArrayFromDates = () => {
    const arr = []
    const lastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0)
    const nextMonthFirstDay = new Date(time.getFullYear(), time.getMonth() + 1, 0)
    const prevMonthLastDay = new Date(time.getFullYear(), time.getMonth(), 0)
    if (String(time.getMonth()) === '0') {
      prevMonthLastDay.setFullYear(time.getFullYear() - 1)
      prevMonthLastDay.setMonth(MONTH_AMOUNT)
      prevMonthLastDay.setDate(0)
    }
    time.setDate(0)
    do {
      time.setDate(time.getDate() + 1)
      arr.push(new Date(time))
    } while (time.getDate() !== lastDay.getDate())
    if (String(arr[0].getDay()) !== '1') {
      for (
        let i = arr[0].getDay() === 0 ? WEEKDAYS_AMOUNT - 1 : arr[0].getDay() - 1;
        i >= 1;
        i -= 1
      ) {
        arr.unshift(new Date(prevMonthLastDay))
        prevMonthLastDay.setDate(prevMonthLastDay.getDate() - 1)
      }
    }
    if (
      String(arr[arr.length - 1].getDay()) !== '7' &&
      String(arr[arr.length - 1].getDay()) !== '0'
    ) {
      for (let i = WEEKDAYS_AMOUNT - arr[arr.length - 1].getDay(); i >= 1; i -= 1) {
        nextMonthFirstDay.setDate(nextMonthFirstDay.getDate() + 1)
        arr.push(new Date(nextMonthFirstDay))
      }
    }

    return arr.map((i) => {
      const checkActive = () =>
        active.getDate() === i.getDate() &&
        active.getMonth() === i.getMonth() &&
        active.getFullYear() === i.getFullYear()
      const checkMonth = () => {
        if (i.getMonth() > time.getMonth() || i.getFullYear() > time.getFullYear()) {
          return true
        }
        return i.getMonth() < time.getMonth() || i.getFullYear() < time.getFullYear()
      }
      if (checkMonth()) {
        return (
          <DayContainerInActive
            key={i.getTime()}
            isOtherMonth
          >{`${i.getDate()}`}</DayContainerInActive>
        )
      }
      if (checkActive()) {
        return (
          <DayContainerActive
            key={i.getTime()}
            onClick={() => setActive(new Date(i))}
            isActive
          >{`${i.getDate()}`}</DayContainerActive>
        )
      }
      return (
        <DayContainer
          key={i.getTime()}
          onClick={() => setActive(new Date(i))}
        >{`${i.getDate()}`}</DayContainer>
      )
    })
  }
  return (
    <CalendarContainer>
      <DayNames>
        {days.map((i) => (
          <DayContainer key={i}>{i.slice(0, 3)}</DayContainer>
        ))}
      </DayNames>
      <DatesContainer>{getArrayFromDates()}</DatesContainer>
    </CalendarContainer>
  )
}

export default Calendar

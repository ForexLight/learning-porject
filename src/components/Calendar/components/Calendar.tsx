import React, { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

const CalendarContainer = styled.div`
  padding: 5px;
`
const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
const DayContainer = styled.div<DayContainerProps>`
  background-color: white;
  color: black;
  height: 50px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const DayContainerActive = styled(DayContainer)<DayContainerProps>`
  background-color: red;
`

const DayContainerInActive = styled(DayContainer)<DayContainerProps>`
  color: #3b3b3b;
  background-color: #a4a4a4;
`

const DatesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
type DayContainerProps = {
  isActive?: boolean
  isOtherMonth?: boolean
}
interface OwnProps {
  time: Date
  setActive: Dispatch<SetStateAction<Date>>
  active: Date
}

type Props = OwnProps

const Calendar: React.FC<Props> = ({ time, setActive, active }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const getArrayFromDates = () => {
    const arr = []
    const lastDay = new Date(time.getFullYear(), time.getMonth() + 1, 0)
    const nextMonthFirstDay = new Date(time.getFullYear(), time.getMonth() + 1, 0)
    const prevMonthLastDay = new Date(time.getFullYear(), time.getMonth(), 0)
    if (String(time.getMonth()) === '0') {
      prevMonthLastDay.setFullYear(time.getFullYear() - 1)
      prevMonthLastDay.setMonth(12)
      prevMonthLastDay.setDate(0)
    }
    time.setDate(0)
    do {
      time.setDate(time.getDate() + 1)
      arr.push(new Date(time))
    } while (time.getDate() !== lastDay.getDate())
    if (String(arr[0].getDay()) !== '1') {
      for (let i = arr[0].getDay() === 0 ? 6 : arr[0].getDay() - 1; i >= 1; i -= 1) {
        prevMonthLastDay.setDate(prevMonthLastDay.getDate() - 1)
        arr.unshift(new Date(prevMonthLastDay))
      }
    }
    if (
      String(arr[arr.length - 1].getDay()) !== '7' &&
      String(arr[arr.length - 1].getDay()) !== '0'
    ) {
      for (let i = 7 - arr[arr.length - 1].getDay(); i >= 1; i -= 1) {
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
        if (i.getMonth() < time.getMonth() || i.getFullYear() < time.getFullYear()) {
          return true
        }
        return false
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

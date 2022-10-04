import styled from 'styled-components'
import { DayContainerProps } from '../Types'

export const CalendarContainer = styled.div`
  padding: 5px;
`
export const DayNames = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`
export const DayContainer = styled.div<DayContainerProps>`
  background-color: white;
  color: black;
  height: 50px;
  width: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DayContainerActive = styled(DayContainer)<DayContainerProps>`
  background-color: red;
`

export const DayContainerInActive = styled(DayContainer)<DayContainerProps>`
  color: #3b3b3b;
  background-color: #a4a4a4;
`

export const DatesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

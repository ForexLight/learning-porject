import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import Button from '../../shared/Button/Button'

import { getDateFormatted } from '../../../helpers/dateHelpers'

import { useAppSelector, useAppDispatch } from '../../../hooks'
import { removeScheduleItem, scheduleState } from '../../../store/slices/scheduleSlice'

const ScheduleItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 5px 0;
  width: 100%;
  border-radius: 20px;
  background-color: #606060;
`
const InformationFieldContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
interface OwnProps {
  date: Date
  editItem: (item: scheduleState) => void
}

type Props = OwnProps

const InformationField: FunctionComponent<Props> = ({ date, editItem }) => {
  const dispatcher = useAppDispatch()
  const schedule = useAppSelector((state) => state.schedule)
  const compareDates = (date1: Date, date2: Date): boolean =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()

  const scheduleNodes = schedule.map((i) => {
    if (compareDates(date, new Date(i.date))) {
      return (
        <ScheduleItems key={i.id}>
          {i.info}
          <div>
            <Button text='edit' onClick={() => editItem(i)} type='regular' size='100px' />
            <Button
              text='delete'
              onClick={() => dispatcher(removeScheduleItem(i.id))}
              type='regular'
              size='100px'
            />
          </div>
        </ScheduleItems>
      )
    }
    return null
  })
  return (
    <InformationFieldContainer>
      <h2>{getDateFormatted(date)}</h2>
      {scheduleNodes}
    </InformationFieldContainer>
  )
}

export default InformationField

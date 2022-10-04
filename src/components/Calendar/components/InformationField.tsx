import React, { FunctionComponent } from 'react'

import Button from '../../shared/Button/Button'

import { getDateFormatted } from '../../../helpers/dateHelpers'

import { useAppDispatch, useAppSelector } from '../../../hooks'
import { removeScheduleItem } from '../../../store/slices/scheduleSlice'
import { InformationFieldContainer, ScheduleItems } from './InformationField.styles'
import { InformationFiledProps } from '../Types'

const InformationField: FunctionComponent<InformationFiledProps> = ({ date, editItem }) => {
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

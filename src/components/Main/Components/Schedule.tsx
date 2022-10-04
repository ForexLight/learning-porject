import React from 'react'
import { ScheduleContainer, ScheduleItem } from './Schedule.styles'

import { useAppSelector } from '../../../hooks'
import { RootState } from '../../../store/store'

const Schedule: React.FC = () => {
  const items = useAppSelector((state: RootState) => state.schedule)
  const scheduleItems = items.map((i) => (
    <ScheduleItem key={i.id}>
      <span>{i.info}</span>
      <div>
        <span>{i.date}</span>
        <span>{i.place}</span>
      </div>
    </ScheduleItem>
  ))
  return (
    <ScheduleContainer>
      <h3>Schedule</h3>
      {scheduleItems}
    </ScheduleContainer>
  )
}
export default Schedule

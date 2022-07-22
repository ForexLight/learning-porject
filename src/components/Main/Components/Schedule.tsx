import React, { useState } from 'react'
import styled from 'styled-components'

import data from '../../../data'
import { ScheduleType } from '../Types'

const ScheduleContainer = styled.section`
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
const ScheduleItem = styled.div`
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

const Schedule: React.FC = () => {
  const [items] = useState<ScheduleType[]>(data.scheduleItems)
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

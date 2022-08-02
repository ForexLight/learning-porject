import React, { useState } from 'react'
import styled from 'styled-components'

import Greeting from './Components/Greeting'
import Notification from './Components/Notification'
import data from '../../data'
import { NotificationType } from './Types'
import BmiCalculator from './Components/BmiCalculator'
import Certificates from './Components/Certificates'
import Schedule from './Components/Schedule'

const StyledMain = styled.div`
  padding: 0 5px;
  @media (min-width: 542px) {
    height: 100%;
    padding: 5px;
  }
`
const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 542px) {
    height: 65%;
    flex-direction: row;
    .leftSide {
      width: 50%;
    }

    .rightSide {
      padding-left: 5px;
      height: 100%;
      width: 50%;
    }

    margin-top: 20px;
    padding: 20px;
  }
  @media (min-width: 766px) {
  }
  @media (min-width: 1200px) {
  }
`

const Main: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>(data.notifications)
  const deleteNotification = (id: number) => {
    const newData = notifications.filter((i) => Number(i.id) !== id)
    setNotifications(newData)
  }
  return (
    <StyledMain>
      <Notification notifications={notifications} deleteNotification={deleteNotification} />
      <Greeting />
      <AdditionalContainer>
        <div className='leftSide'>
          <BmiCalculator />
          <Certificates />
        </div>
        <div className='rightSide'>
          <Schedule />
        </div>
      </AdditionalContainer>
    </StyledMain>
  )
}

export default Main

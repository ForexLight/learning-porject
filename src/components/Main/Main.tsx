import React, { useState } from 'react'

import Greeting from './Components/Greeting'
import Notification from './Components/Notification'
import data from '../../data'
import { NotificationType } from './Types'
import BmiCalculator from './Components/BmiCalculator'
import Certificates from './Components/Certificates'
import Schedule from './Components/Schedule'
import { AdditionalContainer, StyledMain } from './Main.styles'

const Main: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>(data.notifications)
  const deleteNotification = (id: number) => {
    const newData = notifications.filter((i) => Number(i.id) !== id)
    setNotifications(newData)
  }
  return (
    <StyledMain data-testid='main-component'>
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

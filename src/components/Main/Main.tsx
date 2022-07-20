import React, { useState } from 'react'
import styled from 'styled-components'

import Greeting from './Components/Greeting'
import Notification from './Components/Notification'
import data from '../../data'
import { NotificationType } from './Types'
import BmiCalculator from './Components/BmiCalculator'
import Certificates from './Components/Certificates'

const StyledMain = styled.div`
  margin: 5px;
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
      <BmiCalculator />
      <Certificates />
    </StyledMain>
  )
}

export default Main

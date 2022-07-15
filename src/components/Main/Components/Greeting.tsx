import React, { useState } from 'react'
import styled from 'styled-components'

import SvgLoader from '../../../helpers/SvgLoader'

import userImg from '../../../images/user_logo.png'
import greetingByDayTime from '../../../helpers/greetingByDayTime'

const GreetingStyled = styled.section`
  display: flex;
  height: 150px;
  width: 100%;
  background-color: green;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border-radius: 20px;
  div {
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      align-self: flex-start;
    }
  }
  @media (min-width: 512px) {
    width: 50%;
  }
  @media (min-width: 766px) {
    width: 35%;
  }
`
type NotificationContainerType = {
  visible: boolean
}

const NotificationContainer = styled.div<NotificationContainerType>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
`

const Greeting: React.FC = () => {
  const [visibleNotification, setVisibleNotification] = useState(false)
  return (
    <GreetingStyled>
      <div>
        <img src={userImg} alt='user logo' />
        <h2>Good {greetingByDayTime(new Date())} Vlad</h2>
      </div>
    </GreetingStyled>
  )
}

export default Greeting

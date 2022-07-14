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
  padding: 0 10px;
  border-radius: 20px;
  div {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 50px;
      align-self: flex-start;
    }
  }
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 25px;
    }
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
    <>
      <GreetingStyled>
        <div>
          <img src={userImg} alt='user logo' />
          <h2>Good {greetingByDayTime(new Date())} Vlad</h2>
        </div>
        <div className='circle' onClick={() => setVisibleNotification(!visibleNotification)}>
          <SvgLoader id='notification' />
        </div>
      </GreetingStyled>
      <NotificationContainer visible={visibleNotification}>
        There is no notification
      </NotificationContainer>
    </>
  )
}

export default Greeting

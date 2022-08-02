import React, { useState } from 'react'
import styled from 'styled-components'
import SvgLoader from '../../../helpers/SvgLoader'
import { NotificationContainerType, NotificationProps } from '../Types'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { RootState } from '../../../store/store'
import { notificationState, removeNotification } from '../../../store/slices/notificationSlice'

const NotificationsStyle = styled.section<NotificationContainerType>`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 100%;

  position: relative;

  svg {
    width: 36px;
  }

  .notificationTitle {
    border-radius: 20px;
    background-color: orange;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 5px;

    .notificationCounter {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;

      span {
        top: 35px;
        left: 20px;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: red;
        color: white;
        position: absolute;
      }

      button {
        transform: ${(props) => (props.visible ? 'rotate(360deg)' : 'rotate(270deg)')};
        transition: transform 0.3s ease-in-out;
        border: none;
        background: none;
      }
    }

    h2 {
      font-size: 24px;
    }
  }

  @media (min-width: 540px) {
    .notificationTitle {
      width: 60%;
      align-self: flex-end;
      justify-self: flex-end;
    }
  }
  @media (min-width: 766px) {
    .notificationTitle {
      width: 45%;
    }
  }
  @media (min-width: 1200px) {
    .notificationTitle {
      width: 35%;
    }
  }
`
const NotificationsContainer = styled.div<NotificationContainerType>`
  color: black;
  position: absolute;
  z-index: 10;
  padding: 5px 10px;
  top: 80px;
  right: 0;
  border-radius: 20px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: red;
  @media (min-width: 540px) {
    width: 60%;
  }
  @media (min-width: 766px) {
    width: 45%;
  }
  @media (min-width: 1200px) {
    width: 35%;
  }
`
const NotificationItemStyle = styled.div`
  background-color: blue;
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  width: 100%;

  span {
    font-size: 18px;
  }

  button {
    background: none;
    border: none;

    svg {
      width: 30px;
    }
  }
`

type Props = NotificationProps

const Notification: React.FC<Props> = () => {
  const notifications = useAppSelector((state: RootState) => state.notification)
  const dispatcher = useAppDispatch()

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const notifNodes = notifications.map((item: notificationState) => (
    <NotificationItemStyle key={item.id}>
      <span>{item.info}</span>
      <span>{item.date}</span>
      <button type='button' onClick={() => dispatcher(removeNotification(item.id))}>
        <SvgLoader id='xmark' />
      </button>
    </NotificationItemStyle>
  ))
  return (
    <NotificationsStyle visible={isVisible}>
      <div className='notificationTitle'>
        <h2>Notification center</h2>
        <div className='notificationCounter'>
          <SvgLoader id='exclamation' />
          {notifications.length ? <span>{notifications.length}</span> : null}
          <button type='button' onClick={() => setIsVisible(!isVisible)}>
            <SvgLoader id='arrow' />
          </button>
        </div>
      </div>
      {notifications.length ? (
        <NotificationsContainer visible={isVisible}>{notifNodes}</NotificationsContainer>
      ) : (
        <NotificationsContainer visible={isVisible}>
          <h3>There is no any notification</h3>
        </NotificationsContainer>
      )}
    </NotificationsStyle>
  )
}

export default Notification

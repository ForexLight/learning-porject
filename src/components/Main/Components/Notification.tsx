import React, { useState } from 'react'
import SvgLoader from '../../../helpers/SvgLoader'
import { NotificationProps } from '../Types'
import { useAppDispatch, useAppSelector } from '../../../hooks'
import { RootState } from '../../../store/store'
import { notificationState, removeNotification } from '../../../store/slices/notificationSlice'
import {
  NotificationItemStyle,
  NotificationsContainer,
  NotificationsStyle,
} from './Notification.styles'

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

export type NotificationType = {
  id: string
  info: string
  date: string
}

export interface NotificationProps {
  notifications: NotificationType[]
  deleteNotification: (id: number) => void
}

export type NotificationContainerType = {
  visible: boolean
}
export type PhysiqueType = {
  height: number
  weight: number
}

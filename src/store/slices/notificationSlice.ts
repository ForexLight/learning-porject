import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import data from '../../data'

export interface notificationState {
  id: string
  info: string
  date: string
}

const initialState: notificationState[] = data.notifications

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotifications: (state: notificationState[], action: PayloadAction<notificationState>) => {
      state.push(action.payload)
    },
    removeNotification: (state: notificationState[], action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addNotifications, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import data from '../../data'
import login from '../../components/Login/Login'

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
    addNotifications: (state, action: PayloadAction<notificationState>) => {
      state.push(action.payload)
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addNotifications, removeNotification } = notificationSlice.actions

export default notificationSlice.reducer

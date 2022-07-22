import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import scheduleReducer from './slices/scheduleSlice'
import certificationReducer from './slices/certificatSlice'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    schedule: scheduleReducer,
    certification: certificationReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

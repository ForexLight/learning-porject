import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './slices/notificationSlice'
import scheduleReducer from './slices/scheduleSlice'
import certificationReducer from './slices/certificatSlice'
import doctorsReducer from './slices/doctorsSlice'

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
    schedule: scheduleReducer,
    certification: certificationReducer,
    doctorReducer: doctorsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import data from '../../data'

export interface scheduleState {
  id: string
  info: string
  place: string
  date: string
}

const initialState: scheduleState[] = data.scheduleItems

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addScheduleItem: (state: scheduleState[], action: PayloadAction<scheduleState>) => {
      if (state.findIndex((i) => i.date === action.payload.date) < 0) {
        state.push(action.payload)
      }
    },
    removeScheduleItem: (state: scheduleState[], action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
    updateScheduleItem: (state: scheduleState[], action: PayloadAction<scheduleState>) => {
      state.forEach((el, id) => {
        if (el.id === action.payload.id) {
          state[id] = { ...state[id], ...action.payload }
        }
      })
    },
  },
})

export const { addScheduleItem, removeScheduleItem, updateScheduleItem } = scheduleSlice.actions

export default scheduleSlice.reducer

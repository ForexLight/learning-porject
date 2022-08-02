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
      state.findIndex((i) => i.date === action.payload.date) < 0
        ? state.push(action.payload)
        : console.log('already in state')
    },
    removeScheduleItem: (state: scheduleState[], action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addScheduleItem, removeScheduleItem } = scheduleSlice.actions

export default scheduleSlice.reducer

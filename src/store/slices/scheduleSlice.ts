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
    addScheduleItem: (state, action: PayloadAction<scheduleState>) => {
      state.push(action.payload)
    },
    removeScheduleItem: (state, action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addScheduleItem, removeScheduleItem } = scheduleSlice.actions

export default scheduleSlice.reducer

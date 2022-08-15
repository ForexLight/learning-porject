import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import data from '../../data'

export type Doctors = {
  id: string
  name: string
  speciality: string
  rating: string
  photo: string
  bio: string
}
export interface doctorsState {
  categories: string[]
  doctors: Doctors[]
}

const initialState: doctorsState = { categories: data.categories, doctors: data.doctors }

export const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    addDoctor: (state, action: PayloadAction<Doctors>) => {
      state.doctors.push(action.payload)
    },
    removeDoctor: (state, action: PayloadAction<string>) => {
      state.doctors.splice(
        state.doctors.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addDoctor, removeDoctor } = doctorsSlice.actions

export default doctorsSlice.reducer

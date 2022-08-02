import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import data from '../../data'

export interface certificationState {
  id: string
  name: string
  result: string
  date: string
}

const initialState: certificationState[] = data.certificates

export const certificationSlice = createSlice({
  name: 'certification',
  initialState,
  reducers: {
    addCertificate: (state: certificationState[], action: PayloadAction<certificationState>) => {
      state.push(action.payload)
    },
    removeCertificate: (state: certificationState[], action: PayloadAction<string>) => {
      state.splice(
        state.findIndex((i) => i.id === action.payload),
        1,
      )
    },
  },
})

export const { addCertificate, removeCertificate } = certificationSlice.actions

export default certificationSlice.reducer

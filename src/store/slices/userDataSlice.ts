import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userDataState {
  email: string
  password: string
}

const initialState: userDataState = {
  email: '',
  password: '',
}

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    changeData: (state: userDataState, action: PayloadAction<userDataState>) => {
      state.password = action.payload.password
      state.email = action.payload.email
    },
    clearData: (state: userDataState) => {
      state.password = ''
      state.email = ''
    },
  },
})

export const { changeData, clearData } = userDataSlice.actions

export default userDataSlice.reducer

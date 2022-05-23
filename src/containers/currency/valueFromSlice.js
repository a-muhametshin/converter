import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  status: 'ready',
}

export const valueFromSlice = createSlice({
  name: 'valueFrom',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = valueFromSlice.actions

export const selectValueFrom = (state) => state.valueFrom.value

export default valueFromSlice.reducer

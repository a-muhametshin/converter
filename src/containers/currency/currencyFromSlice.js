import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
  status: 'ready',
}

export const currencyFromSlice = createSlice({
  name: 'currencyFrom',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { set } = currencyFromSlice.actions

export const selectCurrencyFrom = (state) => state.currencyFrom.value

export default currencyFromSlice.reducer

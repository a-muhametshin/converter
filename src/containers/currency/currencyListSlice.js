import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchCurrencyList } from './currencyApi'

const initialState = {
  value: [],
  status: 'ready',
}

export const getCurrencyListAsync = createAsyncThunk('currency/fetchCurrencies', async () => {
  const response = await fetchCurrencyList()
  return response
})

export const currencyListSlice = createSlice({
  name: 'currencyList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyListAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getCurrencyListAsync.fulfilled, (state, action) => {
        state.status = 'ready'
        state.value = action.payload
      })
  },
})

export const selectCurrencyList = (state) => state.currencyList.value

export default currencyListSlice.reducer

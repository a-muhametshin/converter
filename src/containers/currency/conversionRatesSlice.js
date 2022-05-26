import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchConversionRate } from './currencyApi'

const initialState = {
  value: {},
  status: 'ready',
}

export const getConversionRatesAsync = createAsyncThunk('currency/fetchConversionRates', async (conversionId) => {
  const result = await fetchConversionRate(conversionId)
  const formattedRes = Object.values(result)
  const response = {[formattedRes[0]]: formattedRes[1]}
  return response
})

export const conversionRatesSlice = createSlice({
  name: 'conversionRates',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getConversionRatesAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getConversionRatesAsync.fulfilled, (state, action) => {
        state.status = 'ready'
        for (const [key, value] of Object.entries(action.payload)) {
          state.value[key] = value
        }
      })
  },
})

export const selectConversionRates = (state) => state.conversionRates.value

export default conversionRatesSlice.reducer

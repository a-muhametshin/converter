import { configureStore } from '@reduxjs/toolkit'
import currencyListReducer from '../containers/currency/currencyListSlice'
import currencyFromReducer from '../containers/currency/currencyFromSlice'
import currenciesToReducer from '../containers/currency/currenciesToSlice'
import conversionRatesReducer from '../containers/currency/conversionRatesSlice'
import valueFromReducer from '../containers/currency/valueFromSlice'

export const store = configureStore({
  reducer: {
    conversionRates: conversionRatesReducer,
    currencyFrom: currencyFromReducer,
    currenciesTo: currenciesToReducer,
    currencyList: currencyListReducer,
    valueFrom: valueFromReducer,
  },
})

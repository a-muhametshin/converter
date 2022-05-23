import React from 'react'
import { useSelector } from 'react-redux'

import { selectCurrencyList } from './currencyListSlice'
import { selectCurrencyFrom } from './currencyFromSlice'
import { selectConversionRates } from './conversionRatesSlice'
import { selectValueFrom } from './valueFromSlice'
import CurrencyValueInput from './CurrencyValueInput'

const ConversionRateInput = ({ currencyToId }) => {
  console.log('currencyToId', currencyToId)
  const valueFrom = useSelector(selectValueFrom)
  const currencyList = useSelector(selectCurrencyList)
  const conversionRates = useSelector(selectConversionRates)
  const currencyFrom = useSelector(selectCurrencyFrom)
  const currency = currencyList ? currencyList[currencyToId] : null
  const conversionRate = conversionRates?.rates ? conversionRates?.rates[currencyFrom] : null
  const value = conversionRate ? conversionRate * valueFrom : ''

  return <CurrencyValueInput disabled={true} value={value} currencyId={currency} />
}

export default ConversionRateInput

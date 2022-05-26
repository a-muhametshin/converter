import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography } from '@mui/material'
import useInterval from '../../helper/use-interval'
import { getCurrencyListAsync, selectCurrencyList } from './currencyListSlice'
import { set as setCurrencyFrom, selectCurrencyFrom } from './currencyFromSlice'
import { setByIndex as setCurrenciesToByIndex, selectCurrenciesTo } from './currenciesToSlice'
import { getConversionRatesAsync } from './conversionRatesSlice'
import { set as setValueFrom, selectValueFrom } from './valueFromSlice'
import { arrayifyObject } from '../../helper/api'

import { CurrencySelector } from './CurrencySelector'
import CurrencyValueInput from './CurrencyValueInput'
import ConversionRateInput from './ConversionRateInput'
import AddRemoveRowButton from './AddRemoveRowButton'

export function Currency() {
  const dispatch = useDispatch()
  const valueFrom = useSelector(selectValueFrom)
  const currencyList = arrayifyObject(useSelector(selectCurrencyList))
  const currencyFrom = useSelector(selectCurrencyFrom)
  const currenciesTo = useSelector(selectCurrenciesTo)
  const handleValueFromChange = ({ target: { value } }) => {
    dispatch(setValueFrom(value))
  }

  const handleCurrencyFromChange = ({ target: { value } }) => {
    dispatch(setCurrencyFrom(value))
  }

  const handleCurrenciesToChange = ({ target: { value, name } }) => {
    const index = parseInt(name.replace(/[^0-9]/g, ''))
    if (currenciesTo[index] !== value) {
      dispatch(setCurrenciesToByIndex({ value: value, index: index }))
    }
  }

  const haveFromAndToCurrencies = currencyFrom && currenciesTo.length > 0

  useEffect(() => {
    dispatch(getCurrencyListAsync())
  }, [dispatch])

  useEffect(() => {
    if (haveFromAndToCurrencies) {
      currenciesTo.forEach((cid) => {   
          dispatch(getConversionRatesAsync(cid))
      })
    }
  }, [currenciesTo, currencyFrom, dispatch, haveFromAndToCurrencies])
  
  useInterval(() => {
    currenciesTo.forEach((cid) => {   
      dispatch(getConversionRatesAsync(cid))
  })
  }, 5000*60);

  return (
    <>
      <Grid container sx={{ display: 'flex' }} maxWidth="sm" spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="body1" align='center'>Конвертор валют</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CurrencyValueInput
            handleChange={handleValueFromChange}
            disabled={false}
            value={valueFrom}
            currencyId={currencyFrom}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CurrencySelector
            index="-1"
            handleChange={handleCurrencyFromChange}
            selectedCurrency={currencyFrom}
            currencyList={currencyList}
            disabled={false}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" align='center'>Блок конвертации</Typography>       
        </Grid>
        {currenciesTo.map((ct, i) => (
          <React.Fragment key={i}>
            <Grid item xs={12} sm={6}>
              <ConversionRateInput currencyToId={currenciesTo[i]} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CurrencySelector
                index={i}
                handleChange={handleCurrenciesToChange}
                selectedCurrency={currenciesTo[i]}
                currencyList={currencyList}
              />
            </Grid>
          </React.Fragment>
        ))}
        <Grid item>
          <AddRemoveRowButton add={true} />
        </Grid>
        <Grid item>
          <AddRemoveRowButton add={false} />
        </Grid>
      </Grid>
    </>
  )
}

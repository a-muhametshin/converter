import React from 'react'
import NumberFormat from 'react-number-format'
import { useSelector } from 'react-redux'
import { InputAdornment, TextField } from '@material-ui/core'
import { makeStyles } from '@mui/styles'

import { MAX_CURRENCY_VALUE } from '../../constants/currency'
import { selectCurrencyList } from './currencyListSlice'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row !important',
    height: '100%',
  },
}))

const NumberFormatCustom = (props) => {
  const { inputRef, onChange, currency, prefix, ...other } = props
  const withValueLimit = (inputObj) => {
    const { value } = inputObj
    if (value <= MAX_CURRENCY_VALUE) return inputObj
  }

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      decimalScale={2}
      fixedDecimalScale
      onValueChange={(values) => {
        onChange({
          target: {
            id: props.id,
            name: props.name,
            value: values.value,
          },
        })
      }}
      isAllowed={withValueLimit}
      thousandSeparator
      isNumericString
    />
  )
}

const CurrencyValueInput = ({ handleChange, value, disabled, currencyId }) => {
  const classes = useStyles()
  const currencyList = useSelector(selectCurrencyList)
  const getCurrencyAdornment = () => {
    let currency
    if(Array.isArray(currencyList)){
      currency = currencyList.filter(item => item.id === currencyId)
    }
    if (currency) {
      if (currency[0]?.id) {
        return currency[0]?.id
    }
    return ''
    }
  }

  return (
    <TextField
      label="Значение"
      onChange={handleChange}
      name="value"
      className={classes.root}
      InputProps={{
        inputComponent: NumberFormatCustom,
        startAdornment: <InputAdornment position="start">{getCurrencyAdornment()}</InputAdornment>,
      }}
      variant="outlined"
      value={value}
      fullWidth
      disabled={disabled}
    />
  )
}

export default CurrencyValueInput

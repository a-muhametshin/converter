import { FormControl, MenuItem, Select } from '@mui/material'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

export const CurrencySelector = ({ index, handleChange, selectedCurrency, currencyList }) => {
  return (
    <FormControl sx={{ minWidth: 300, width: '100%' }}>
      <Select
        labelId="currency-select-label"
        id={`currency-select-${index}`}
        name={`currency-select-${index}`}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        value={selectedCurrency}
        onChange={handleChange}
        MenuProps={MenuProps}
        variant="outlined"
      >
        <MenuItem key={'none'} value="">
          Выберите валюту
        </MenuItem>
        {currencyList.length > 0
          ? currencyList.map(({ name, id }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))
          : ''}
      </Select>
    </FormControl>
  )
}

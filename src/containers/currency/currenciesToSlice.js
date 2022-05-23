import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [''],
  status: 'ready',
}

export const currenciesToSlice = createSlice({
  name: 'currenciesTo',
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    },
    setByIndex: (state, action) => {
      const { index, value } = action.payload
      state.value[index] = value
    },
    push: (state, action) => {
      state.value.push(action.payload)
    },
    pop: (state) => {
      state.value.pop()
    },
  },
})

export const { set, setByIndex, push, pop } = currenciesToSlice.actions

export const selectCurrenciesTo = (state) => state.currenciesTo.value

export default currenciesToSlice.reducer

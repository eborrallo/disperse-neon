import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Currency, CurrencyState } from 'state/types'
import fetchCurrency from './fetchCurrency'

export const fetchAXS = createAsyncThunk<Currency, { currentCurrency: string }>(
  'currencies/fetchAXS',
  async ({ currentCurrency }) => {
    const axs = await fetchCurrency('axie-infinity', currentCurrency)
    return axs
  },
)
export const fetchSLP = createAsyncThunk<Currency, { currentCurrency: string }>(
  'currencies/fetchSLP',
  async ({ currentCurrency }) => {
    const slp = await fetchCurrency('smooth-love-potion', currentCurrency)
    return slp
  },
)
export const fetchETH = createAsyncThunk<Currency, { currentCurrency: string }>(
  'currencies/fetchETH',
  async ({ currentCurrency }) => {
    const slp = await fetchCurrency('ethereum', currentCurrency)
    return slp
  },
)

const initialState: CurrencyState = { slp: null, axs: null, eth: null, loaded: false }

export const currencySlice = createSlice({
  name: 'Currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAXS.fulfilled, (state, action) => {
      state.axs = action.payload
      state.loaded = true
    })
    builder.addCase(fetchSLP.fulfilled, (state, action) => {
      state.slp = action.payload
      state.loaded = true
    })
    builder.addCase(fetchETH.fulfilled, (state, action) => {
      state.eth = action.payload
      state.loaded = true
    })
  },
})

export default currencySlice.reducer

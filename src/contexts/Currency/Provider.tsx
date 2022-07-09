import React, { createContext, useState } from 'react'
import { ContextApi, ProviderState } from './types'
import { LS_KEY, getCurrencyCodeFromLS } from './helpers'

const initialState: ProviderState = {
  isFetching: true,
  currentCurrency: 'usd',
}

export const CurrencyContext = createContext<ContextApi>(undefined)

export const CurrencyProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<ProviderState>(() => {
    const codeFromStorage = getCurrencyCodeFromLS()

    return {
      ...initialState,
      currentCurrency: codeFromStorage,
    }
  })

  const setCurrency = (currency: string) => {
    localStorage.setItem(LS_KEY, currency)

    setState((prevState) => ({
      ...prevState,
      isFetching: false,
      currentCurrency: currency,
    }))
  }

  return <CurrencyContext.Provider value={{ ...state, setCurrency }}>{children}</CurrencyContext.Provider>
}

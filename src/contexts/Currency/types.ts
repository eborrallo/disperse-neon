import { ReactText } from 'react'

export type ContextData = {
  [key: string]: ReactText
}

export interface ProviderState {
  isFetching: boolean
  currentCurrency: string
}

export interface ContextApi extends ProviderState {
  setCurrency: (currency: string) => void
}

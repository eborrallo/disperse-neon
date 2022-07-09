import useRefresh from 'hooks/useRefresh'
import { useAppDispatch } from 'state'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Currency, State } from 'state/types'
import usePageCurrency from '../../contexts/Currency/usePageCurrency'
import { fetchAXS, fetchSLP, fetchETH } from '.'

export const useCryptoCurrencies = () => {
  const { slowRefresh } = useRefresh()
  const dispatch = useAppDispatch()
  const { currentCurrency } = usePageCurrency()

  useEffect(() => {
    dispatch(fetchAXS({ currentCurrency }))
    dispatch(fetchSLP({ currentCurrency }))
    dispatch(fetchETH({ currentCurrency }))
  }, [dispatch, slowRefresh, currentCurrency])
}

export const useCurrencyRetriever = (name: string) => {
  return useSelector((state: State) => {
    return state.currency[name]
  })
}

export const usePriceAXS = (): Currency => {
  const currency = useCurrencyRetriever('axs')
  if (currency === null) {
    return undefined
  }
  return currency
}

export const usePriceSLP = (): Currency => {
  const currency = useCurrencyRetriever('slp')
  if (currency === null) {
    return undefined
  }
  return currency
}

export const usePriceETH = (): Currency => {
  const currency = useCurrencyRetriever('eth')
  if (currency === null) {
    return undefined
  }
  return currency
}

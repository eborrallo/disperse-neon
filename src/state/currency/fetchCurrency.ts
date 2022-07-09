import { Currency } from 'state/types'
import fetchCoinGeckoValue from './fetchCoinGeckoValue'

const fetchCurrency = async (currencyName: string, currentCurrency: string): Promise<Currency> => {
  const currency = await fetchCoinGeckoValue(currencyName, currentCurrency)

  return {
    name: currency.name,
    price: currency.price,
    priceChangePercentage24h: currency.priceChangePercentage24h,
  }
}

export default fetchCurrency

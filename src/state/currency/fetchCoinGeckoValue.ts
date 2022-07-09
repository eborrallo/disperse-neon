import axios from 'axios'
import { SerializedBigNumber } from 'state/types'

type Currency = {
  name: string
  price: SerializedBigNumber
  priceChangePercentage24h: SerializedBigNumber
}

const fetchCoinGeckoValue = async (currencyName: string, currentCurrency: string): Promise<Currency> => {
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currencyName}`)
  return {
    name: currencyName,
    price: response.data.market_data.current_price[currentCurrency],
    priceChangePercentage24h: response.data.market_data.price_change_percentage_24h,
  }
}

export default fetchCoinGeckoValue

import { useContext } from 'react'
import { CurrencyContext } from './Provider'

const usePageCurrency = () => {
  const languageContext = useContext(CurrencyContext)

  if (languageContext === undefined) {
    throw new Error('Page currency context is undefined')
  }

  return languageContext
}

export default usePageCurrency

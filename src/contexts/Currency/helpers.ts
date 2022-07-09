export const LS_KEY = 'pancakeswap_currency'

export const getCurrencyCodeFromLS = () => {
  try {
    const codeFromStorage = localStorage.getItem(LS_KEY)

    return codeFromStorage || 'usd'
  } catch {
    return 'usd'
  }
}

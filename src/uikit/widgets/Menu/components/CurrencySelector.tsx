import React from 'react'
import Text from '../../../components/Text/Text'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Button from '../../../components/Button/Button'
import MenuButton from './MenuButton'
import { Coin98Icon } from '../../../components/Svg'

interface Props {
  currentCurrency: string
  setCurrency: (currency: string) => void
}
const currencies = [
  'btc',
  'eth',
  'ltc',
  'bch',
  'bnb',
  'eos',
  'xrp',
  'xlm',
  'link',
  'dot',
  'yfi',
  'usd',
  'aed',
  'ars',
  'aud',
  'bdt',
  'bhd',
  'bmd',
  'brl',
  'cad',
  'chf',
  'clp',
  'cny',
  'czk',
  'dkk',
  'eur',
  'gbp',
  'hkd',
  'huf',
  'idr',
  'ils',
  'inr',
  'jpy',
  'krw',
  'kwd',
  'lkr',
  'mmk',
  'mxn',
  'myr',
  'ngn',
  'nok',
  'nzd',
  'php',
  'pkr',
  'pln',
  'rub',
  'sar',
  'sek',
  'sgd',
  'thb',
  'try',
  'twd',
  'uah',
  'vef',
  'vnd',
  'zar',
  'xdr',
  'xag',
  'xau',
  'bits',
  'sats',
]
currencies.sort()

const CurrencySelector: React.FC<Props> = ({ currentCurrency, setCurrency }) => (
  <Dropdown
    position="top-right"
    target={
      <Button variant="text" startIcon={<Coin98Icon color="textSubtle" width="24px" />}>
        <Text color="textSubtle">{currentCurrency?.toUpperCase()}</Text>
      </Button>
    }
  >
    {currencies.map((currency) => (
      <MenuButton
        key={currency}
        fullWidth
        onClick={() => setCurrency(currency)}
        // Safari fix
        style={{ minHeight: '32px', height: 'auto' }}
      >
        {currency.toUpperCase()}
      </MenuButton>
    ))}
  </Dropdown>
)

export default React.memo(CurrencySelector, (prev, next) => prev.currentCurrency === next.currentCurrency)

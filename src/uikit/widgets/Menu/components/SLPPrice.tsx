import React from 'react'
import styled from 'styled-components'
import { Currency } from 'state/types'
import BigNumber from 'bignumber.js'
import { SLP } from '../../../components/Svg'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

interface Props {
  slpCurrency: Currency
  currentCurrency?: string
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.3s;
  }

  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`

const SLPPrice: React.FC<Props> = ({ slpCurrency, currentCurrency }) => {
  const url = `https://www.coingecko.com/en/coins/smooth-love-potion/${currentCurrency}`
  let colorPercentage = '#18db46'
  let priceChange = new BigNumber(0)
  if (slpCurrency) {
    priceChange = new BigNumber(slpCurrency.priceChangePercentage24h)
    if (priceChange.isLessThan(0)) {
      colorPercentage = '#f54242'
    }
  }

  return slpCurrency ? (
    <PriceLink href={url} target="_blank">
      <SLP width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`${new BigNumber(slpCurrency.price).toFixed(
        4,
      )} ${currentCurrency.toUpperCase()}`}</Text>
      <Text ml="5px" fontSize="12px" color={colorPercentage}>
        {priceChange.toNumber().toFixed(2)}%
      </Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  )
}

export default React.memo(SLPPrice)

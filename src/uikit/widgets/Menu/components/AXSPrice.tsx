import React from 'react'
import styled from 'styled-components'
import { Currency } from 'state/types'
import BigNumber from 'bignumber.js'
import { AXS } from '../../../components/Svg'
import Text from '../../../components/Text/Text'
import Skeleton from '../../../components/Skeleton/Skeleton'

interface Props {
  axsCurrency?: Currency
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

const CakePrice: React.FC<Props> = ({ axsCurrency, currentCurrency }) => {
  const url = `https://www.coingecko.com/en/coins/axie-infinity/${currentCurrency}`
  let colorPercentage = '#18db46'
  let priceChange = new BigNumber(0)
  if (axsCurrency) {
    priceChange = new BigNumber(axsCurrency.priceChangePercentage24h)

    if (priceChange.isLessThan(0)) {
      colorPercentage = '#f54242'
    }
  }

  return axsCurrency ? (
    <PriceLink href={url} target="_blank">
      <AXS width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`${new BigNumber(axsCurrency.price).toFixed(
        2,
      )} ${currentCurrency.toUpperCase()}`}</Text>
      <Text ml="5px" fontSize="12px" color={colorPercentage}>
        {priceChange.toNumber().toFixed(2)}%
      </Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  )
}

export default React.memo(CakePrice)

import { Currency } from '@pancakeswap/sdk'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div<{ margin: boolean }>`
  display: flex;
  flex-direction: row;
  margin-right: ${({ margin }) => margin && '4px'};
`

interface DoubleCurrencyLogoProps {
  margin?: boolean
  size?: number
  currency0?: Currency
  currency1?: Currency
}

export default function DoubleCurrencyLogo({
  currency0,
  currency1,
  size = 20,
  margin = false,
}: DoubleCurrencyLogoProps) {
  return <Wrapper margin={margin} />
}

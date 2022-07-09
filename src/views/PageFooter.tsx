import { useTranslation } from 'contexts/Localization'
import React from 'react'
import styled from 'styled-components'
import { Text } from 'uikit'
import LinkExternal from '../uikit/components/Link/LinkExternal'
import CopyToClipboard from '../uikit/widgets/WalletModal/CopyToClipboard'

const Footer = styled.div`
  flex: none;
  text-align: center;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`
const StyledCopyToClipboard = styled(CopyToClipboard)`
  justify-content: center;
`
const PageFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const { t } = useTranslation()

  return (
    <Footer>
      <Text>
        🔥🔥 {t('Please consider donating to:')}
        <StyledCopyToClipboard toCopy="ronin:0690782030d8d0581068906e45c956fcc78ceb5d">
          ronin:0690782030d8d0581068906e45c956fcc78ceb5d
        </StyledCopyToClipboard>
      </Text>
      <br />
      <Text fontSize="12px">
        {t("We're NOT affiliated with Axie Infinity. This is a fan site dedicated to the game")}
      </Text>
      <br />
      <LinkExternal small href="https://discord.com/invite/s4N7k5P5g4" margin="auto" textAlign="center">
        {t('Have doubts? Problems or anything else join our discord!')}
      </LinkExternal>
    </Footer>
  )
}

export default PageFooter

import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { useMatchBreakpoints } from 'uikit/hooks'
import CopyToClipboard from 'uikit/widgets/WalletModal/CopyToClipboard'
import { CogIcon } from '../../../components/Svg'
import IconButton from '../../../components/Button/IconButton'
import Text from '../../../components/Text/Text'
import { MENU_ENTRY_HEIGHT } from '../config'
import { PanelProps, PushedProps } from '../types'
import ThemeSwitcher from './ThemeSwitcher'
import SocialLinks from './SocialLinks'
import LangSelector from './LangSelector'
import AXSPrice from './AXSPrice'
import SLPPrice from './SLPPrice'
import CurrencySelector from './CurrencySelector'
import ETHPrice from './ETHPrice'

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`

const Footer = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`

const DonationBox = styled.div`
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  axsCurrency,
  slpCurrency,
  ethCurrency,
  currentLang,
  langs,
  setLang,
  setCurrency,
  currentCurrency,
}) => {
  const { isXs } = useMatchBreakpoints()
  const { t } = useTranslation()

  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    )
  }

  return (
    <Footer>
      {!isXs && (
        <DonationBox>
          <Text>{t('Please if you find this tool useful consider donating any SLP, AXS, WETH counts ❤️❤️')}</Text>
          <CopyToClipboard
            toCopy="ronin:0690782030d8d0581068906e45c956fcc78ceb5d"
            successMsg=" ronin address. Thanks for helping!"
          >
            {t('Donate')}
          </CopyToClipboard>
        </DonationBox>
      )}
      <Container>
        <CurrencySelector currentCurrency={currentCurrency} setCurrency={setCurrency} />
      </Container>
      <Container>
        <SocialEntry>
          <ETHPrice ethCurrenncy={ethCurrency} currentCurrency={currentCurrency} />
        </SocialEntry>
        <SocialEntry>
          <AXSPrice axsCurrency={axsCurrency} currentCurrency={currentCurrency} />
        </SocialEntry>

        <SocialEntry>
          <SLPPrice slpCurrency={slpCurrency} currentCurrency={currentCurrency} />
          <SocialLinks />
        </SocialEntry>
        <SettingsEntry>
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} />
        </SettingsEntry>
      </Container>
    </Footer>
  )
}

export default PanelFooter

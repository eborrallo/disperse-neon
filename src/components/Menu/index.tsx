import React from 'react'
import { Menu as UikitMenu } from 'uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import useTheme from 'hooks/useTheme'
import { usePriceAXS, usePriceETH, usePriceSLP } from 'state/currency/hooks'
import config from './config'
import UserMenu from './UserMenu'
import usePageCurrency from '../../contexts/Currency/usePageCurrency'

const Menu = (props) => {
  const { isDark, toggleTheme } = useTheme()
  const axsCurrency = usePriceAXS()
  const slpCurrency = usePriceSLP()
  const ethCurrency = usePriceETH()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { currentCurrency, setCurrency } = usePageCurrency()

  return (
    <UikitMenu
      userMenu={<UserMenu />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      currentCurrency={currentCurrency}
      setCurrency={setCurrency}
      axsCurrency={axsCurrency}
      slpCurrency={slpCurrency}
      ethCurrency={ethCurrency}
      links={config(t)}
      profile={{
        username: null,
        image: undefined,
        profileLink: '/profile',
        noProfileLink: '/profile',
        showPip: false,
      }}
      {...props}
    />
  )
}

export default Menu

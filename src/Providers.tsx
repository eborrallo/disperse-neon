import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { useThemeManager } from 'state/user/hooks'
import { LanguageProvider } from 'contexts/Localization'
import { RefreshContextProvider } from 'contexts/RefreshContext'
import { ToastsProvider } from 'contexts/ToastsContext'
import store from 'state'
import { dark, light, ModalProvider } from 'uikit'
import { CurrencyProvider } from 'contexts/Currency'

const ThemeProviderWrapper = (props) => {
  const [isDark] = useThemeManager()
  return <ThemeProvider theme={isDark ? dark : light} {...props} />
}

const Providers: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <ToastsProvider>
        <HelmetProvider>
          <ThemeProviderWrapper>
            <LanguageProvider>
              <CurrencyProvider>
                <RefreshContextProvider>
                  <ModalProvider>{children}</ModalProvider>
                </RefreshContextProvider>
              </CurrencyProvider>
            </LanguageProvider>
          </ThemeProviderWrapper>
        </HelmetProvider>
      </ToastsProvider>
    </Provider>
  )
}

export default Providers

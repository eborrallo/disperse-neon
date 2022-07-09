import { ReactElement } from 'react'
import { Currency } from 'state/types'
import { Colors } from '../../theme/types'

export interface Language {
  code: string
  language: string
  locale: string
}

export interface PushedProps {
  isPushed: boolean
  pushNav: (isPushed: boolean) => void
}

export interface NavTheme {
  background: string
}

export interface LinkStatus {
  text: string
  color: keyof Colors
}

export interface MenuSubEntry {
  label: string
  href: string
  calloutClass?: string
  status?: LinkStatus
}

export interface MenuEntry {
  label: string
  icon: string
  items?: MenuSubEntry[]
  href?: string
  calloutClass?: string
  initialOpenState?: boolean
  status?: LinkStatus
}

export interface IntervalElo {
  from: number
  to?: number
  slp: number
}

export interface EloConf {
  interval: IntervalElo[]
}

export interface ScholarsTableConf {
  eloCell: EloConf
}

export interface PanelProps {
  isDark: boolean
  toggleTheme: (isDark: boolean) => void
  currentLang: string
  langs: Language[]
  setLang: (lang: Language) => void
  setCurrency: (currency: string) => void
  currentCurrency: string
  links: Array<MenuEntry>
  axsCurrency?: Currency
  slpCurrency?: Currency
  ethCurrency?: Currency
}

export interface NavProps extends PanelProps {
  userMenu?: ReactElement
}

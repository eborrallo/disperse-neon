import { MenuEntry } from 'uikit'
import { ContextApi } from 'contexts/Localization/types'

const config: (t: ContextApi['t']) => MenuEntry[] = (t) => [
  {
    label: t('Tracker'),
    icon: 'TeamBattleIcon',
    href: '/tracker',
  },
  {
    label: t('Axies'),
    icon: 'NftIcon',
    href: '/tracker/axies',
  },
  {
    label: t('Payments'),
    icon: 'TicketIcon',
    href: '/tracker/payments',
  },
  {
    label: t('FAQ'),
    icon: 'MoreIcon',
    href: 'https://axie.management/#faq',
  },
]

export default config

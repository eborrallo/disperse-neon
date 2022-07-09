import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Axie Tracker for your accounts',
  description:
    'Axie Tracker is a tool to track all your accounts scholars, their daily SLP team setup, ELO ranks, money they generate and the payouts. Track smart all the accounts in one page',
  image: 'https://axie.management/tracker/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  if (path.startsWith('/tracker/ronin:')) {
    const ronin = path.replace('/tracker/', '')
    return {
      title: `${t('Axie Infinity details for ')} ${ronin}`,
      description: `Checkout all the combat logs, daily SLP progress all the axies for account ${ronin} analyse better with Axie Infinity Tracker Manage all your Scholars their progress and much more!`,
    }
  }
  switch (path) {
    case '/':
      return {
        title: `${t('Tracker')} | ${t('Axie Management Tracker')}`,
      }
    case 'tracker/axies':
      return {
        title: `${t('Checkout all the axies for your accounts and manage them')}`,
        description: `${t(
          'Filter out and classify all the your axies from different accounts in a single page, breed better, check genetics and find similar axies',
        )}`,
      }

    default:
      return null
  }
}

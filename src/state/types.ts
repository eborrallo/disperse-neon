import { ThunkAction } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, AnyAction>

export interface BigNumberToJson {
  type: 'BigNumber'
  hex: string
}

export type TranslatableText =
  | string
  | {
      key: string
      data?: {
        [key: string]: string | number
      }
    }

export type SerializedBigNumber = string

export interface ScholarState {
  data: Scholar[]
  watched: Scholar[]
  loaded: boolean
}

export interface CurrencyState {
  axs?: Currency
  slp?: Currency
  eth?: Currency
  loaded: boolean
}

export interface ScholarAddress {
  name: string
  percentage: number
  ronin: string
  loaded: boolean
  scholarPayoutAddress?: string
  investorPercentage?: number
  investorRonin?: string
}

export interface ScholarLeaderboard {
  drawTotal: number
  elo: number
  loseTotal: number
  name: string
  rank: number
  winRate: string
  winTotal: number
}

export interface ScholarSLP {
  claimableTotal: number
  lastClaimedItemAt: number
  todaySoFar: number
  yesterdaySLP: number
  total: number
  avg: number
  unclaimed: number
  manager: number
  scholar: number
  investor: number
  scholarPercentage: number
}

export interface ScholarBattle {
  // eslint-disable-next-line camelcase
  battle_type: number
  // eslint-disable-next-line camelcase
  battle_uuid: string
  // eslint-disable-next-line camelcase
  created_at: string
  // eslint-disable-next-line camelcase
  first_client_id: string
  // eslint-disable-next-line camelcase
  first_team_id: string
  id: string
  // eslint-disable-next-line camelcase
  second_client_id: string
  // eslint-disable-next-line camelcase
  second_team_id: string
  fighters: ScholarBattleFigthers[]
  winner: number
}

export interface ScholarBattleFigthers {
  team_id: string
  fighter_id: string
  fighter_class: string
  fighter_level: string
}

export interface ScholarDaily {
  date: string
  slp: ScholarSLP
}

export interface Scholar {
  address: ScholarAddress
  leaderboard?: ScholarLeaderboard
  slp?: ScholarSLP
  daily?: ScholarDaily[]
  battles?: ScholarBattle[]
}

// Block
export interface BlockState {
  currentBlock: number
  initialBlock: number
}

// Collectibles

export interface CollectiblesState {
  isInitialized: boolean
  isLoading: boolean
  data: {
    [key: string]: number[]
  }
}

// Predictions

export enum BetPosition {
  BULL = 'Bull',
  BEAR = 'Bear',
  HOUSE = 'House',
}

export enum PredictionStatus {
  INITIAL = 'initial',
  LIVE = 'live',
  PAUSED = 'paused',
  ERROR = 'error',
}

// Global state

export interface State {
  block: BlockState
  scholars: ScholarState
  tokenBalances
  currency: CurrencyState
  axies: AxiesState
  config: ConfigState
  announcements: AnnouncementsState
}

export interface Currency {
  name: string
  price: SerializedBigNumber
  priceChangePercentage24h: SerializedBigNumber
}

export interface AxiesState {
  axies: Axie[]
  loaded: boolean
  loadedAt?: number
}

export interface Axie {
  id: number
  name: string
  class?: string
  breedCount: number
  image: string
  genes: AxieGenes
  owner: string
  parts: AxieParts[]
}

export interface AxieParts {
  id: number
  class: string
  name: string
  type: string
}

export interface AxieGenes {
  id: string
  quality: number
  eyes: AxieGene
  ears: AxieGene
  back: AxieGene
  mouth: AxieGene
  horn: AxieGene
  tail: AxieGene
}

export interface AxieGene {
  d: AxieGeneLevel
  r1: AxieGeneLevel
  r2: AxieGeneLevel
}

export interface AxieGeneLevel {
  type: string
  name: string
  partdId: string
  cls: string
}

export interface AnnouncementsState {
  list: Announcement[]
  watched: string[]
}

export interface Announcement {
  uuid: string
  title: string
  description: string
  link?: string
}

export interface ConfigState {
  currency: string
  useDarkTheme: boolean
  useCollapsedView: boolean

  hideScholarColumnName: boolean
  hideScholarColumnToday: boolean
  hideScholarColumnYesterday: boolean
  hideScholarColumnAvg: boolean
  hideScholarColumnElo: boolean
  hideScholarColumnNextClaim: boolean
  hideScholarColumnInvestor: boolean
  hideScholarColumnScholar: boolean
  hideScholarColumnManager: boolean
  hideScholarColumnTotal: boolean
  hideScholarColumnUnclaimed: boolean
  hideScholarColumnInRonin: boolean
}

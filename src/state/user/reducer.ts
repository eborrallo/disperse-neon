import { createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import axios from 'axios'
import { cancel, removeToast, timeDone, toggleTheme, updateUserExpertMode } from './actions'
import { hasExceedDate } from '../../views/hasExceeedDate'
import { alertVariants } from '../../uikit/components/Alert'

export enum Workflow {
  Init,
  AuthError,
  Payment,
  Paid,
  TimeOver,
  PaidFail,
  Cancel,
}

interface CheckTxResponse {
  paidAmount: string
  status: string
  succeed: boolean
  txHash?: string
}

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number

  userExpertMode: boolean
  workflow: Workflow

  isDark: boolean
  timeDone: boolean
  payed: boolean
  validated: boolean
  error: boolean
  errorMessage?: string
  tx?: any
  amountFiat?: number

  txCheck: boolean
  txCheckError?: string

  authResponse?: AuthenticationResponse
  createTxResponse?: CreateTxResponse
  checkTxResponse?: CheckTxResponse
  txValidated?: string

  txValidUntil?: number
  userRonin?: string

  authLoading: boolean
  validateLoading: boolean
  txLoading: boolean

  toasts: Array<any>
}

interface AuthenticationResponse {
  ronin: string
  validated: boolean
  temporalName: string
  validUntil: number
}

interface ValidatedResponse {
  validated: boolean
  validUntil: number
}

interface CreateTxResponse {
  uuid: string
  amount: number
  ronin: string
  succeedURL: string
  failureURL: string
}

export const initialState: UserState = {
  userExpertMode: false,
  isDark: true,
  timeDone: false,
  payed: false,
  validated: false,
  error: false,
  validateLoading: false,
  authLoading: true,
  txLoading: false,
  workflow: Workflow.Init,
  txCheck: false,
  toasts: [],
}

export const authenticationThunk = createAsyncThunk<AuthenticationResponse, { tx: string; clientId: string }>(
  'user/authenticationThunk',
  async ({ tx, clientId }) => {
    const url = `https://payment-api.unchained.tools/v1/authentication`

    //  const dispatch = useAppDispatch()
    const response = await axios.post(url, {
      payload: tx,
      clientId,
    })

    return response.data
  },
)

export const createTxThunk = createAsyncThunk<CreateTxResponse, { tx: string; clientId: string }>(
  'user/createTxThunk',
  async ({ tx, clientId }) => {
    const url = `https://payment-api.unchained.tools/v1/transaction/create`

    const response = await axios.put(url, {
      payload: tx,
      clientId,
    })

    return response.data
  },
)

export const validateThunk = createAsyncThunk<ValidatedResponse, { tx: string; clientId: string }>(
  'user/validateThunk',
  async ({ tx, clientId }) => {
    const url = `https://payment-api.unchained.tools/v1/authentication/validate`

    const response = await axios.post(url, {
      payload: tx,
      clientId,
    })

    return response.data
  },
)

export const fetchPriceThunk = createAsyncThunk<{ price: number }, void>('user/fetchPriceThunk', async () => {
  const currencyName = 'smooth-love-potion'
  const currentCurrency = 'eur'
  const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${currencyName}`)

  return {
    price: response.data.market_data.current_price[currentCurrency],
  }
})

export const checkTxThunk = createAsyncThunk<CheckTxResponse, { tx: string; clientId: string; uuid: string }>(
  'user/checkTxThunk',
  async ({ tx, clientId, uuid }) => {
    const url = `https://payment-api.unchained.tools/v1/transaction/check/${uuid}`
    let response
    try {
      response = await axios.post(url, {
        payload: tx,
        clientId,
      })
    } catch (e) {
      throw new Error(JSON.stringify({ txHash: e.response.data.txHash, code: e.response.status }))
    }

    return response.data
  },
)

export default createReducer(initialState, (builder) =>
  builder
    .addCase(updateUserExpertMode, (state, action) => {
      state.userExpertMode = action.payload.userExpertMode
    })
    .addCase(toggleTheme, (state) => {
      state.isDark = !state.isDark
    })
    .addCase(cancel, (state) => {
      state.workflow = Workflow.Cancel
    })
    .addCase(removeToast, (state, action) => {
      state.toasts = state.toasts.filter((prevToast) => prevToast.id !== action.payload.id)
    })
    .addCase(timeDone, (state) => {
      state.timeDone = true
      state.workflow = Workflow.TimeOver
      clearInterval()
    })

    .addCase(authenticationThunk.rejected, (state, action) => {
      console.error('AuthenticationThunk', action)
      state.error = true
      state.errorMessage = 'Error boooyy'
      state.authLoading = false
      state.workflow = Workflow.AuthError
      state.toasts = errorToast(state)
    })
    .addCase(authenticationThunk.fulfilled, (state, action) => {
      const response: AuthenticationResponse = action.payload
      state.authResponse = response
      state.error = false
      state.errorMessage = null
      state.authLoading = false
      state.validated = response.validated
      state.txValidUntil = response.validUntil
      state.userRonin = response.ronin
      state.workflow = Workflow.AuthError
      const miliseconds = hasExceedDate(response.validUntil)

      if (response.validated) {
        state.workflow = Workflow.Payment
      } else if (miliseconds <= 0) {
        state.workflow = Workflow.TimeOver
      }
    })

    .addCase(validateThunk.fulfilled, (state, action) => {
      state.error = false
      state.errorMessage = null
      state.validateLoading = false
      state.validated = action.payload.validated
      if (action.payload.validated) {
        state.toasts = successToast(state, `🎊 Validated 🎊 `, 'Now you are validated , you can do the payment')
        state.txValidUntil = action.payload.validUntil
        state.workflow = Workflow.Payment
      } else {
        state.toasts = errorToast(
          state,
          'Validation failed',
          'Check if the marketplace gets updated, if so wait some seconds and try again. Otherwise check the video.',
        )
        state.workflow = Workflow.AuthError
      }
    })
    .addCase(validateThunk.rejected, (state) => {
      state.validateLoading = false
      state.validated = false
    })
    .addCase(validateThunk.pending, (state) => {
      state.validateLoading = true
      state.validated = false
      state.payed = false
      state.tx = null
    })

    .addCase(createTxThunk.fulfilled, (state, action) => {
      state.createTxResponse = action.payload
    })
    .addCase(fetchPriceThunk.fulfilled, (state, action) => {
      state.amountFiat = action.payload.price
    })
    .addCase(createTxThunk.rejected, (state) => {
      state.toasts = errorToast(state)
    })

    .addCase(checkTxThunk.fulfilled, (state, action) => {
      state.txCheck = true
      state.txCheckError = null
      state.payed = true
      state.txLoading = false
      state.checkTxResponse = action.payload
      if (action.payload.succeed) {
        state.workflow = Workflow.Paid
      } else {
        state.workflow = Workflow.PaidFail
      }
      clearInterval()
    })

    .addCase(checkTxThunk.pending, (state) => {
      state.txCheck = false
      state.txCheckError = null
      state.txLoading = true
    })
    .addCase(checkTxThunk.rejected, (state, action) => {
      const decoded = JSON.parse(action.error.message)
      state.txValidated = decoded.txHash
    }),
)

const errorToast = (state, title?, desc?) => {
  const now = Date.now()
  const toast = {
    id: `id-${now}`,
    title: title ?? `Something was wrong  ${new Date(now).toLocaleDateString()}`,
    description: desc ?? 'Open a ticket in our discord ',
    action: {
      text: 'Discord Help',
      url: 'https://discord.com/invite/s4N7k5P5g4',
    },
    type: alertVariants.DANGER,
  }
  return [toast, ...state.toasts]
}

const successToast = (state, title?, desc?) => {
  const now = Date.now()
  const toast = {
    id: `id-${now}`,
    title: title ?? `🎊 Success 🎊`,
    description: desc ?? '',
    type: alertVariants.SUCCESS,
  }
  return [toast, ...state.toasts]
}

const clearInterval = () => {
  const interval = window.setInterval(() => null, Number.MAX_SAFE_INTEGER)
  for (let i = 1; i < interval; i++) {
    window.clearInterval(i)
  }
}

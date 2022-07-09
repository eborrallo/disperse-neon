import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../index'
import { toggleTheme as toggleThemeAction } from '../actions'

export function useThemeManager(): [boolean, () => void] {
  const dispatch = useDispatch<AppDispatch>()
  const isDark = useSelector<AppState, AppState['user']['isDark']>((state) => state.user.isDark)

  const toggleTheme = useCallback(() => {
    dispatch(toggleThemeAction())
  }, [dispatch])

  return [isDark, toggleTheme]
}

export const useTimeDone = () => {
  return useSelector<AppState, AppState['user']['timeDone']>((state) => state.user.timeDone)
}

export const useTxValidUntil = () => {
  return useSelector<AppState, AppState['user']['txValidUntil']>((state) => state.user.txValidUntil)
}
export const useTx = () => {
  return useSelector<AppState, AppState['user']['createTxResponse']>((state) => state.user.createTxResponse)
}
export const useCheckTx = () => {
  return useSelector<AppState, AppState['user']['checkTxResponse']>((state) => state.user.checkTxResponse)
}
export const useFiat = () => {
  return useSelector<AppState, AppState['user']['amountFiat']>((state) => state.user.amountFiat)
}
export const useWorkflow = () => {
  return useSelector<AppState, AppState['user']['workflow']>((state) => state.user.workflow)
}

export const useValidated = () => {
  return useSelector<AppState, AppState['user']['validated']>((state) => state.user.validated)
}
export const useLoadings = () => {
  return useSelector<AppState, { validateLoading: boolean; txLoading: boolean; authLoading: boolean }>((state) => ({
    validateLoading: state.user.validateLoading,
    txLoading: state.user.txLoading,
    authLoading: state.user.authLoading,
  }))
}
export const useAuthentication = () => {
  return useSelector<AppState, AppState['user']['authResponse']>((state) => state.user.authResponse)
}
export const useToasts = () => {
  return useSelector<AppState, AppState['user']['toasts']>((state) => state.user.toasts)
}
export const useTxPayed = () => {
  return useSelector<AppState, { payed: boolean; tx: string }>((state) => ({
    payed: state.user.payed,
    tx: state.user.tx,
  }))
}
export const useTxCheck = () => {
  return useSelector<AppState, { txCheck: boolean; txCheckError?: string }>((state) => ({
    txCheck: state.user.txCheck,
    txCheckError: state.user.txCheckError,
  }))
}

export const useError = () => {
  return useSelector<AppState, { error: boolean; errorMessage: string }>((state) => ({
    error: state.user.error,
    errorMessage: state.user.errorMessage,
  }))
}

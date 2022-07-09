import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { updateVersion } from './global/actions'
import user from './user/reducer'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    user,
  },
  middleware: [...getDefaultMiddleware({ thunk: true })],
})

store.dispatch(updateVersion())

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch()

export default store

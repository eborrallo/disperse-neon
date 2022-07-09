import { useCallback } from 'react'
import { useAppDispatch } from 'state'

const useAuth = () => {
  const dispatch = useAppDispatch()

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const logout = useCallback(() => {}, [])

  return { logout }
}

export default useAuth

import React from 'react'
import { Button, Flex, Google, Notification, Text, useModal } from 'uikit'
import { useTranslation } from 'contexts/Localization'
import firebase from 'firebase/app'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useAppDispatch } from '../state'

const ConnectWalletButton = (props) => {
  const { t } = useTranslation()
  const [user, loading] = useAuthState(firebase.auth())
  const dispatch = useAppDispatch()

  return (
    <Flex>
      <Button ml="32px" onClick={user ? () => null : null} {...props}>
        {!user && <Google width="24px" mr="8px" />}
        {user ? t('Logout') : loading ? t('Loading...') : t('Login')}
      </Button>
    </Flex>
  )
}

export default ConnectWalletButton

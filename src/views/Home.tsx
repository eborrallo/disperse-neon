import React from 'react'
import styled from 'styled-components'
import {Card, CardBody, Flex, Heading, LogoIcon, ToastContainer} from 'uikit'
import Page from 'components/Layout/Page'
import {useTranslation} from 'contexts/Localization'
import 'firebase/messaging'
import useTheme from 'hooks/useTheme'
import ThemeSwitcher from '../uikit/widgets/Menu/components/ThemeSwitcher'
import {useError, useToasts} from '../state/user/hooks'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
`

const Home = () => {
    const {t} = useTranslation()
    const {isDark, toggleTheme} = useTheme()
    const toasts = useToasts()
    const {error} = useError()


    return (
        <Page>
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme}/>
            <StyledNotFound>
                <Card isWarning={error} style={{minWidth: '375px', width: '100%', maxWidth: '500px'}}>
                    <CardBody>
                        <Heading scale="md" textAlign="center">
                            <Flex justifyContent="center" alignContent="center" alignItems="center">
                                <LogoIcon width="35px" height="35px" style={{marginRight: '12px'}}/> Disperse
                            </Flex>
                        </Heading>
                    </CardBody>
                </Card>
            </StyledNotFound>
            <ToastContainer toasts={toasts} onRemove={handleRemove}/>
        </Page>
    )
}

export default Home

import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoIcon } from '../../../components/Svg'
import Flex from '../../../components/Box/Flex'
import { HamburgerIcon, HamburgerCloseIcon } from '../icons'
import MenuButton from './MenuButton'
import Heading from '../../../components/Heading/Heading'

interface Props {
  isPushed: boolean
  isDark: boolean
  togglePush: () => void
  href: string
}

const blink = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.1);
  }
`

const LogoText = styled(Heading)`
  margin: 10px;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  .icon {
    width: 35px;
    height: 35px;
    display: none;
    display: block;
  }

  .desktop-text {
    display: none;

    ${({ theme }) => theme.mediaQueries.sm} {
      display: block;
    }
  }

  .right-eye {
    animation-delay: 20ms;
  }

  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`

const Logo: React.FC<Props> = ({ isPushed, togglePush }) => {
  const innerLogo = (
    <>
      <LogoIcon className="icon" />
      <LogoText className="desktop-text"> Scholar Tracker Manager</LogoText>
    </>
  )

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>

      <StyledLink as="a" to="/tracker" href="/tracker" aria-label="Home page">
        {innerLogo}
      </StyledLink>
    </Flex>
  )
}

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark)

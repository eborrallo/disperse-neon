import React from 'react'
import styled from 'styled-components'
import { DropdownProps, PositionProps, Position } from './types'

const getLeft = ({ position }: PositionProps) => {
  if (position === 'top-right') {
    return '100%'
  }
  if (position === 'bottom-left') {
    return '-200%'
  }
  return '50%'
}

const getBottom = ({ position }: PositionProps) => {
  if (position === 'top' || position === 'top-right') {
    return '100%'
  }
  return 'auto'
}

const DropdownContent = styled.div<{ position: Position }>`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0);
  left: ${getLeft};
  bottom: ${getBottom};
  background-color: ${({ theme }) => 'transparent'};
  box-shadow: ${({ theme }) => theme.shadows.level1};
  padding: 16px;
  max-height: 90vh;
  max-width: 350px;
  overflow-y: auto;
  z-index: ${({ theme }) => theme.zIndices.dropdown};
  border-radius: ${({ theme }) => theme.radii.small};
`

const Container = styled.div`
  position: relative;

  &:hover ${DropdownContent}, &:focus-within ${DropdownContent} {
    display: flex;
  }
`

interface NotificationDropdownProps extends DropdownProps {
  onHover: () => void
}

const Dropdown: React.FC<NotificationDropdownProps> = ({ onHover, target, position = 'bottom', children }) => {
  return (
    <Container onMouseOver={onHover}>
      {target}
      <DropdownContent position={position}>{children}</DropdownContent>
    </Container>
  )
}
Dropdown.defaultProps = {
  position: 'bottom',
}

export default Dropdown

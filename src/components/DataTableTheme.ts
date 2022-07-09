import { createTheme } from 'react-data-table-component'
import styled from 'styled-components'
import { darkColors, lightColors } from '../uikit'

export const DataTableDarkTheme = createTheme('dark', {
  text: {
    primary: '#B8ADD2',
    secondary: '#2aa198',
  },
  background: {
    default: '#27262c',
  },
  context: {
    background: '#cb4b16',
    text: '#FFFFFF',
  },
  divider: {
    default: '#524b63',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
})
export const StyledTableBorder = styled.div`
  border-radius: ${({ theme }) => theme.radii.card};
  background-color: ${({ theme }) => theme.colors.cardBorder};
  padding: 1px 1px 3px 1px;
  background-size: 400% 400%;
`
export const StyledDataTableHeader = (isDark) => ({
  headCells: {
    style: {
      fontSize: '14px',
      fontWeight: 700,
      color: darkColors.secondary,
      paddingLeft: '16px',
      paddingRight: '16px',
    },
    activeSortStyle: {
      color: darkColors.secondary,
      '&:focus': {
        outline: 'none',
      },
      '&:hover:not(:focus)': {
        color: darkColors.primaryDark,
      },
    },
    inactiveSortStyle: {
      '&:focus': {
        outline: 'none',
        color: darkColors.primaryDark,
      },
      '&:hover': {
        color: darkColors.primaryDark,
      },
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: isDark ? lightColors.textSubtle : darkColors.textSubtle,
    },
  },
})

'use client'
import { ThemeProvider } from '@emotion/react'
import { createTheme } from '@mui/material'
import theme from '@/app/theme'

const ThemeProviderCustom = ({ children }) => {
  const muiTheme = createTheme({ ...theme })

  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
}

export default ThemeProviderCustom

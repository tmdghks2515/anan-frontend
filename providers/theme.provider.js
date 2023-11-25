'use client'
import { ThemeProvider } from '@emotion/react'
import theme from '@/app/theme'

const ThemeProviderCustom = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeProviderCustom

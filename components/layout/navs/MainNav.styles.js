'use client'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import theme from '@/app/theme'

export const StyledNav = styled.nav`
  display: flex;
  gap: 1rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  margin-top: 0.3rem;
  & a:hover {
    color: ${(props) => props.theme.color.primary};
  }
`
export const activeNavCss = css`
  color: ${theme.color.primary};
`

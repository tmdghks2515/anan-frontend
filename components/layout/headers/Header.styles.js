'use client'
import styled from '@emotion/styled'
import Link from 'next/link'

export const StyledHeader = styled.div`
  display: flex;
  padding-block: 1rem;
  gap: 3rem;
  align-items: center;
  & .h-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1rem;
  }
`

export const StyledHomeLink = styled(Link)`
  font-size: 2rem;
  font-weight: ${(props) => props.theme.fontWeight.bold};
`

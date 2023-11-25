'use client'
import styled from '@emotion/styled'

export const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.theme.breakpoint.extraLarge};
  margin: auto;
  color: ${(props) => props.theme.color.text};
  font-size: ${(props) => props.theme.fontSize.medium};
`

export const StyledContainer = styled.div``

export const StyledPageTop = styled.div`
  margin-top: 3rem;
  font-size: ${(props) => props.theme.fontSize.xLarge};
  & b {
    color: ${(props) => props.theme.color.info};
    font-size: ${(props) => props.theme.fontSize.large};
  }
  & > div {
    color: ${(props) => props.theme.color.text4};
    font-size: ${(props) => props.theme.fontSize.medium};
  }
`

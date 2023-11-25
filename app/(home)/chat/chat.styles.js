'use client'
import styled from '@emotion/styled'

export const StyledChats = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns of equal width */
  grid-template-rows: auto; /* Automatically sized rows */
  gap: 2rem;
  padding-bottom: 1rem;
`

export const StyledChatItem = styled.div`
  border: 1px solid ${(props) => props.theme.color.background2};
  border-radius: 0.1rem;
  box-shadow: ${(props) => props.theme.shadow.medium};
  padding: 0.6rem;
  & .title {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }
`

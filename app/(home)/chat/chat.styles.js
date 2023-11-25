'use client'
import styled from '@emotion/styled'

export const StyledChats = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Three columns of equal width */
  grid-template-rows: auto; /* Automatically sized rows */
  gap: 2rem;
  padding-bottom: 1rem;
`

export const StyledChatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.color.background2};
  border-radius: 0.1rem;
  box-shadow: ${(props) => props.theme.shadow.small};
  padding: 0.6rem;
  transition: transform 0.3s ease-in-out;
  :hover {
    box-shadow: ${(props) => props.theme.shadow.medium};
    transform: translateY(-3px);
  }
  & .title {
    font-size: ${(props) => props.theme.fontSize.large};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    :hover {
      color: ${(props) => props.theme.color.primary};
    }
  }
  & .info {
    display: flex;
    gap: 0.3rem;
    align-items: center;
    font-size: ${(props) => props.theme.fontSize.small};
    color: ${(props) => props.theme.color.text3};
    & a {
      color: ${(props) => props.theme.color.text};
      :hover {
        color: ${(props) => props.theme.color.primary};
      }
    }
  }
`

export const StyledMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  background-color: ${(props) => props.theme.color.background2};
  border-radius: 0.3rem;
  padding: 0.5rem;
  font-size: ${(props) => props.theme.fontSize.normal};
`

export const StyledMessageItem = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: ${(props) => props.me && 'end'};
  & .avatar {
    order: ${(props) => props.me && 2};
  }
  & .content {
    order: ${(props) => props.me && 1};
    padding-block: 0.3rem;
    padding-inline: 0.5rem;
    border-radius: 0.2rem;
    color: ${(props) => props.me && 'white'};
    background-color: ${(props) =>
      props.me ? props.theme.color.primary : 'white'};
  }
`

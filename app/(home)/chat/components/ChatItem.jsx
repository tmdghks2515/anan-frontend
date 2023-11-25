import React from 'react'
import { Chat } from '@/core/types/chat.types'
import { StyledChatItem } from '@/app/(home)/chat/chat.styles'

const ChatItem = ({ chat }) => {
  return (
    <StyledChatItem>
      <div className='title'>{chat.title}</div>
    </StyledChatItem>
  )
}

ChatItem.propTypes = {
  chat: Chat,
}

export default ChatItem

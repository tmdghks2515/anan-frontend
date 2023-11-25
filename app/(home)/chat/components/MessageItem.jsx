import React from 'react'
import { Message } from '@/core/types/chat.types'
import { StyledMessageItem } from '@/app/(home)/chat/chat.styles'
import Avatar from '@/components/common/Avatar'

const MessageItem = ({ message }) => {
  return (
    <StyledMessageItem me={message.user.id === 1}>
      <Avatar user={message.user} />
      <div className='content'>{message.content}</div>
    </StyledMessageItem>
  )
}

MessageItem.propTypes = {
  message: Message,
}

export default MessageItem

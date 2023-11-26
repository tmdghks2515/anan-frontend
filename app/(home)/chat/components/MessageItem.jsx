import React from 'react'
import { Message } from '@/core/types/chat.types'
import { StyledMessageItem } from '@/app/(home)/chat/chat.styles'
import Avatar from '@/components/common/Avatar'

const MessageItem = ({ message }) => {
  return (
    <StyledMessageItem me={message.user.id === 1}>
      <Avatar user={message.user} size='sm' />
      <div className='nick-cont'>
        <span className='nick'>{message.user.nickname}</span>
        <div className='cont'>{message.content}</div>
      </div>
    </StyledMessageItem>
  )
}

MessageItem.propTypes = {
  message: Message,
}

export default MessageItem

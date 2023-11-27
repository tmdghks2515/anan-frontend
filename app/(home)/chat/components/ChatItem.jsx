import React from 'react'
import { Chat } from '@/core/types/post.types'
import { StyledChatItem, StyledMessages } from '@/app/(home)/chat/chat.styles'
import moment from 'moment'
import Link from 'next/link'
import MessageItem from '@/app/(home)/chat/components/MessageItem'

const ChatItem = ({ chat }) => {
  return (
    <StyledChatItem>
      <Link href={`/chat/${chat.id}`} className='title'>
        {chat.title}
      </Link>

      <Link href={`/chat/${chat.id}`} className='chat'>
        <StyledMessages>
          {chat.messages.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </StyledMessages>
      </Link>

      <div className='info'>
        by <Link href='/'>{chat.user.nickname}</Link>·
        <span className='date'>
          {moment(chat.createdAt).format('YY년 MM월 DD일')}
        </span>
      </div>
    </StyledChatItem>
  )
}

// ChatItem.propTypes = {
//   chat: Chat,
// }

export default ChatItem

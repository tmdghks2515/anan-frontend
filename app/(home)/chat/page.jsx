import {
  StyledContainer,
  StyledPageTop,
} from '@/components/common/common.styles'
import { StyledChats } from '@/app/(home)/chat/chat.styles'
import { chats } from '@/app/(home)/chat/chat.contants'
import ChatItem from '@/app/(home)/chat/components/ChatItem'

const ChatPage = () => {
  return (
    <StyledContainer>
      <StyledPageTop>
        Chat <b>100</b>
        <div>모든 채팅 기록</div>
      </StyledPageTop>

      {/* 채팅 리스트 */}
      <StyledChats>
        {chats.map((chat) => (
          <ChatItem chat={chat} key={chat.id} />
        ))}
      </StyledChats>
    </StyledContainer>
  )
}

export default ChatPage

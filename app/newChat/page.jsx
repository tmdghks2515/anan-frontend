'use client'
import {Button, TextField} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {StyledNewChatPage} from "@/app/(home)/chat/chat.styles";
import {messages as dummyMessages} from "@/app/newChat/newChat.dummy";
import MessageItem from "@/app/(home)/chat/components/MessageItem";
import {anan, steve} from "@/app/(home)/chat/chat.contants";
import SendIcon from '@mui/icons-material/Send';
import AddIcon from '@mui/icons-material/Add';
import Avatar from "@/components/common/Avatar";
import AddChatParticipantModal from "@/components/modals/AddChatParticipantModal";

const NewChatPage = () => {
  const [title, setTitle] = useState('')
  const [messages, setMessages] = useState(dummyMessages)
  const [content, setContent] = useState('')
  const [participants, setParticipants] = useState([anan, steve])
  const [activeUser, setActiveUser] = useState(anan)
  const [titleError, setTitleError] = useState('')
  const [addParticipantModalOpen, setAddParticipantModalOpen] = useState(false)
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [messages])

  const handleChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleChangeContent = (e) => {
    setContent(e.target.value)
  }

  const handleWriteMessage = () => {
    if (content) {
      setMessages([...messages, { id: Number(new Date().getMilliseconds()), user: activeUser, content, createdAt: new Date(), updatedAt: new Date() }])
      setContent('')
    }
  }

  const handleChangeActiveUser = (user) => {
    if (user.id !== activeUser.id) setActiveUser(user)
  }

  const getAvatarClassname = (user) => {
    return user.id === activeUser.id ? 'active' : ''
  }

  const handleClickAddUser = () => {

  }

  const handleCloseAddPartModal = () => {
    setAddParticipantModalOpen(false)
  }

  return (
    <>
      <StyledNewChatPage>
        {/* 제목 */}
        <header>
          <TextField
            id="title"
            label="제목"
            fullWidth
            required
            value={title}
            onChange={handleChangeTitle}
            error={!!titleError}
            helperText={titleError}
          />
        </header>

        {/* 메시지 목록 */}
        <div className='messages' ref={messagesRef}>
          {messages.map(message => <MessageItem key={message.id} message={message} />)}
        </div>

        {/* 채팅 참가자 */}
        <div className='participants'>
          {participants.map(user => <Avatar key={user.id} className={getAvatarClassname(user)} user={user} onClick={() => handleChangeActiveUser(user)} />)}

          <Button onClick={handleClickAddUser} variant='outlined' size='small'>
            추가
            <AddIcon />
          </Button>
        </div>

        <div className='input'>
          {/* 메시지 입력 input */}
          <TextField
            id="content"
            placeholder='메시지를 입력하세요'
            fullWidth
            multiline
            maxRows={5}
            value={content}
            onChange={handleChangeContent}
          />

          {/* 메시지 작성 버튼 */}
          <Button variant='contained' onClick={handleWriteMessage}>
            <SendIcon />
          </Button>
        </div>
      </StyledNewChatPage>

      <AddChatParticipantModal
        open={addParticipantModalOpen}
        onClose={handleCloseAddPartModal}
      />
    </>
  )
}

export default NewChatPage

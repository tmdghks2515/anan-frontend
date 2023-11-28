'use client'
import {
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material'
import Avatar from '@/components/common/Avatar'
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import MuiAvatar from '@mui/material/Avatar'

const AddChatParticipantModal = ({
  open,
  handleClose,
  participants,
  setParticipants,
}) => {
  const [adding, setAdding] = useState(false)
  const [nickname, setNickname] = useState('')

  const handleClickAddButton = () => {
    setAdding(true)
  }

  const handleChangeNickname = (e) => {
    setNickname(e.target.value)
  }

  const handleCloseModal = () => {
    handleClose()

    setTimeout(() => {
      setAdding(false)
      setNickname('')
    }, 500)
  }

  const handleAddUser = () => {
    if (nickname) {
      setParticipants((prev) => [
        ...prev,
        { id: new Date().getTime(), nickname },
      ])
      setAdding(false)
      setNickname('')
    }
  }

  const handleRmUser = (id) => {
    setParticipants((prev) => {
      const i = prev.findIndex((user) => user.id === id)
      if (i > -1) prev.splice(i, 1)
      return [...prev]
    })
  }

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      {/* title */}
      <DialogTitle>채팅 참가자</DialogTitle>
      {/* close button */}
      <IconButton
        aria-label='close'
        onClick={handleCloseModal}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* participants */}
      <List sx={{ pt: 0 }}>
        {participants.map((participant) => (
          <ListItem key={participant.id}>
            <ListItemAvatar>
              <Avatar user={participant} />
            </ListItemAvatar>
            <ListItemText primary={participant.nickname} />
            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
              <IconButton onClick={() => handleRmUser(participant.id)}>
                <RemoveCircleOutlinedIcon color='error' fontSize='small' />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        ))}

        {/* adding form */}
        {adding && (
          <ListItem>
            <ListItemAvatar>
              <Avatar user={{}} />
            </ListItemAvatar>
            <TextField
              id='nickname'
              label='닉네임'
              fullWidth
              required
              value={nickname}
              onChange={handleChangeNickname}
            />
            <ListItemIcon sx={{ justifyContent: 'flex-end' }}>
              <IconButton onClick={handleAddUser}>
                <AddCircleOutlinedIcon color='primary' fontSize='small' />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        )}

        {/* add button */}
        <ListItem disableGutters>
          <ListItemButton autoFocus onClick={handleClickAddButton}>
            <ListItemAvatar>
              <MuiAvatar>
                <AddIcon />
              </MuiAvatar>
            </ListItemAvatar>
            <ListItemText primary='참가자 추가' />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  )
}

export default AddChatParticipantModal

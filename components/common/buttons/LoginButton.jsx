'use client'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/slices/user.slice'
import { anan } from '@/app/(home)/chat/chat.contants'

const LoginButton = () => {
  const dispatch = useDispatch()

  const handleClickLogin = () => {
    dispatch(setUser(anan))
  }

  return (
    <Button onClick={handleClickLogin} variant='contained'>
      로그인
    </Button>
  )
}

export default LoginButton

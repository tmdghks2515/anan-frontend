'use client'
import React from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const MakeChatButton = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/newChat')
  }

  return (
    <Button variant='outlined' onClick={handleClick}>
      채팅 작성
    </Button>
  )
}

export default MakeChatButton

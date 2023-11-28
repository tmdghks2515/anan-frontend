'use client'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'

const MakeChatButton = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/newChat')
  }

  return (
    <Button variant='outlined' onClick={handleClick}>
      글 작성
    </Button>
  )
}

export default MakeChatButton

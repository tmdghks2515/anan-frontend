'use client'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Avatar from '@/components/common/Avatar'
import LoginButton from '@/components/common/buttons/LoginButton'

const HeaderUser = () => {
  const loginUser = useSelector((state) => state.user.value)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted && loginUser ? <Avatar user={loginUser} /> : <LoginButton />
}

export default HeaderUser

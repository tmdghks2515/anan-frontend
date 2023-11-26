'use client'
import React, { useMemo } from 'react'
import { User } from '@/core/types/user.types'
import { Avatar as MuiAvatar } from '@mui/material'

const Avatar = ({ user, size }) => {
  const calcSize = useMemo(() => {
    switch (size) {
      case 'xs':
        return 20
      case 'sm':
        return 28
      case 'md':
        return 36
      case 'lg':
        return 52
      case 'xl':
        return 68
    }
  }, [size])

  return (
    <MuiAvatar
      className='avatar'
      src={user.profileImgSrc ? user.profileImgSrc : '/broken-image.jpg'}
      sx={{ width: calcSize, height: calcSize }}
    />
  )
}

Avatar.propTypes = {
  user: User,
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

export default Avatar

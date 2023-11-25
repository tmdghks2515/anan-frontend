import React from 'react'
import { User } from '@/core/types/user.types'
import { StyledAvatar } from '@/components/common/common.styles'

const Avatar = ({ user }) => {
  return <StyledAvatar size='sm' className='avatar'></StyledAvatar>
}

Avatar.propTypes = {
  user: User,
}

export default Avatar

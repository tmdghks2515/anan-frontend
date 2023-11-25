import { User } from '@/core/types/user.types'

export const Message = {
  id: Number,
  content: String,
  user: User,
  createdAt: Date,
  updatedAt: Date,
}

export const Chat = {
  id: Number,
  title: String,
  users: [User],
  messages: [Message],
  createdAt: Date,
  updatedAt: Date,
}

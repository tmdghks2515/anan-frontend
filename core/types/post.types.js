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
  user: User,
  messages: [Message],
  participants: [User],
  createdAt: Date,
  updatedAt: Date,
}

export const Post = {
  id: Number,
  title: String,
  user: User,
  content: String,
  createdAt: Date,
  updatedAt: Date,
}
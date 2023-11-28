import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: { value: null },
  reducers: {
    setUser: (state, { payload }) => {
      state.value = payload
    },
    removeUser: (state) => {
      state.value = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   user: {
      role: null,
   },
}
export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
   extraReducers: {},
})
export const authActions = authSlice.actions

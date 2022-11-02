import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL =
   'http://ec2-18-195-58-95.eu-central-1.compute.amazonaws.com/api/auth/login'
export const signIn = createAsyncThunk('user/sign', async (data) => {
   try {
      const response = await axios.post(POST_URL, data)
      return response.data
   } catch (err) {
      console.error(err)
   }

   return null
})

const initialState = {
   status: null,
   token: null,
   role: null,
}
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      [signIn.pending]: (state) => {
         state.status = 'loading'
      },
      [signIn.fulfilled]: (state, action) => {
         state.status = 'succes'
         localStorage.setItem('token', JSON.stringify(action.payload.token))
         state.token = action.payload.token
         state.role = action.payload.role
      },
      [signIn.rejected]: (state) => {
         state.status = 'error'
      },
   },
})

export const userAction = userSlice.actions

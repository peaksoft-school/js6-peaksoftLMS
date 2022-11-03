import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL =
   'http://ec2-18-195-58-95.eu-central-1.compute.amazonaws.com/api/auth/login'
export const signIn = createAsyncThunk(
   'user/sign',
   async ({ data, navigate }) => {
      try {
         const response = await axios.post(POST_URL, data)
         const result = response.data
         if (result?.role === 'ADMIN') {
            navigate('/admin')
         } else if (result?.role === 'INSTRUCTOR') {
            navigate('/Instructor')
         } else if (result?.role === 'STUDENT') {
            navigate('/student')
         } else {
            navigate('/login')
         }
         return result
      } catch (err) {
         console.error(err)
      }
      return null
   }
)

const initialState = {
   user: JSON.parse(localStorage.getItem('role'))
      ? {
           status: null,
           token: JSON.parse(localStorage.getItem('token')),
           role: JSON.parse(localStorage.getItem('role')),
        }
      : {
           status: null,
           token: null,
           role: null,
        },
}
export const userSlice = createSlice({
   name: 'user/userSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [signIn.pending]: (state) => {
         state.status = 'loading'
      },
      [signIn.fulfilled]: (state, action) => {
         console.log(action)
         state.user.token = action.payload.token
         state.user.role = action.payload.role
         localStorage.setItem('token', JSON.stringify(action.payload.token))
         localStorage.setItem('role', JSON.stringify(action.payload.role))
         state.status = 'succes'
      },
      [signIn.rejected]: (state) => {
         state.status = 'error'
      },
   },
})

export const userAction = userSlice.actions

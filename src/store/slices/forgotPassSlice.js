import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL =
   'http://ec2-18-195-58-95.eu-central-1.compute.amazonaws.com/api/auth/forgot/password?'
export const forgotPassword = createAsyncThunk(
   'email',
   async ({ data, navigate }) => {
      try {
         const response = await axios.post(
            `${POST_URL}email=${data.email}&link=${data.link}`,
            {
               email: data.email,
               link: data.link,
            }
         )
         //  console.log(response.data)
         if (response.data) {
            navigate('/forgot-password')
         }
         const result = response.data
         //  console.log(data)
         return result
      } catch (err) {
         console.error(err)
      }
      return null
   }
)
const initialState = {
   user: {
      status: null,
   },
}
export const forgotPassSlice = createSlice({
   name: 'email',
   initialState,
   reducers: {},
   extraReducers: {
      [forgotPassword.pending]: (state) => {
         state.status = 'loading'
      },
      [forgotPassword.fulfilled]: (state) => {
         state.status = 'succes'
      },
      [forgotPassword.rejected]: (state) => {
         state.status = 'error'
      },
   },
})

export const userAction = forgotPassSlice.actions

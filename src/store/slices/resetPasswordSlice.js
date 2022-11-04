import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const POST_URL =
   'http://ec2-18-195-58-95.eu-central-1.compute.amazonaws.com/api/auth/reset/password?'
export const resetPassword = createAsyncThunk(
   'newPassword',
   async ({ data, navigate }) => {
      try {
         const response = await axios.post(
            `${POST_URL}email=${data.id}&link=${data.newPassword}`,
            {
               id: data.id,
               newPassword: data.newPassword,
            }
         )
         //  console.log(response.data)
         if (response.data) {
            navigate('/login')
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
export const resetPassSlice = createSlice({
   name: 'newPassword',
   initialState,
   reducers: {},
   extraReducers: {
      [resetPassword.pending]: (state) => {
         state.status = 'loading'
      },
      [resetPassword.fulfilled]: (state) => {
         state.status = 'succes'
      },
      [resetPassword.rejected]: (state) => {
         state.status = 'error'
      },
   },
})

export const userAction = resetPassSlice.actions

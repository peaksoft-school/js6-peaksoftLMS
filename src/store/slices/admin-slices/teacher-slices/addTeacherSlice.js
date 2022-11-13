import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import axiosInstace from '../../../../api/axiosConfig'

const initialState = {
   status: null,
   error: null,
}

export const addTeacher = createAsyncThunk('addTeacher', async () => {
   try {
      const response = await axiosInstace.post('instructor', data)
      const { data } = response
      return data
   } catch (err) {
      console.log(err)
   }
   return null
})
export const teacherAdminSlice = createSlice({
   name: 'teacherAdmin',
   initialState,
   reducers: {},
   extraReducers: {
      [addTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [addTeacher.fulfilled]: (state) => {
         state.status = 'succes'
      },
      [addTeacher.rejected]: (state) => {
         state.status = 'error'
      },
   },
})

export const userAction = teacherAdminSlice.actions

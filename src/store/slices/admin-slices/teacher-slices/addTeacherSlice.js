import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import axiosInstace from '../../../../api/axiosConfig'

const initialState = {
   teachers: [],
   getTeacher: [],
   status: null,
   error: null,
}
export const getAllTeacher = createAsyncThunk(
   'teacherAdmin/getAllTeacher',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstace.get('instructor')
         return response.data
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

export const addTeacher = createAsyncThunk(
   'addTeacher',
   async ({ data }, { rejectWithValue }) => {
      // console.log(data)
      try {
         const response = await axiosInstace.post('instructor', data)
         const result = response.data
         console.log(data)
         return result
         // showSuccess()
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)
export const teacherAdminSlice = createSlice({
   name: 'teacherAdmin',
   initialState,
   reducers: {},
   extraReducers: {
      [addTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [addTeacher.fulfilled]: (state, { payload }) => {
         state.status = 'Учитель успешно добавлень'
         state.teachers = payload
         console.log('payload', payload)
      },
      [addTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
      [getAllTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [getAllTeacher.fulfilled]: (state, action) => {
         state.status = 'success'
         state.getTeacher = action.payload
      },
      [getAllTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
   },
})

export const userAction = teacherAdminSlice.actions

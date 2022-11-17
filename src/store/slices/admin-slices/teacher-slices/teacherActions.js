import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import axiosInstace from '../../../../api/axiosConfig'

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
export const deleteTeacher = createAsyncThunk(
   'teacherAdmin/deleteTeacher',
   async (id, { rejectWithValue, dispatch }) => {
      // console.log(id)
      try {
         const response = await axiosInstace.delete(`instructor/${id}`)
         // console.log(response)
         return dispatch(getAllTeacher(response))
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)
export const getTeacherById = createAsyncThunk(
   'teacherAdmin/deleteTeacher',
   async (id, { rejectWithValue, dispatch }) => {
      // console.log(id)
      try {
         const response = await axiosInstace.delete(`instructor/${id}`)
         // console.log(response)
         return dispatch(getAllTeacher(response))
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

export const addTeacher = createAsyncThunk(
   'addTeacher',
   async ({ data }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstace.post('instructor', data)
         const result = response.data
         //  console.log(data)
         return dispatch(getAllTeacher(result))
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

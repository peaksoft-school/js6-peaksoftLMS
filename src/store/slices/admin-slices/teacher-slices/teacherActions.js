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
   async (id, { rejectWithValue }) => {
      // console.log(id)
      try {
         const response = await axiosInstace.delete(`instructor/${id}`)
         console.log(response)
         return response.data
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)
export const renameTeacher = createAsyncThunk(
   'teacherAdmin/deleteTeacher',
   async (itemId, { rejectWithValue }) => {
      try {
         const response = await axiosInstace.get(`instructor/${itemId}`)
         console.log(response)
         return response.data
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

export const editTeacher = createAsyncThunk(
   'admin-groups/edit',
   async (newGroup, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstace.put(`instructor/${newGroup.id}`, {
            fullName: newGroup.body.fullName,
            specialization: newGroup.body.specialization,
            phoneNumber: newGroup.body.phoneNumber,
            email: newGroup.body.email,
         })
         return dispatch(getAllTeacher(response))
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

// fullName: result.fullName,
// specialization: result.specialization,
// phoneNumber: result.phoneNumber,
// email: result.email,

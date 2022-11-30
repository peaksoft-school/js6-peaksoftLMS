/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../../api/axiosConfig'

export const getAllStudents = createAsyncThunk(
   'admin-students/get',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `student/filter?studyFormat=${'ALL'}`
         )
         const { data } = response
         return data
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

export const getFilteredlStudents = createAsyncThunk(
   'admin-students/get-filter',
   async (groupFormat, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `student/filter?studyFormat=${groupFormat}`
         )
         const { data } = response
         return data
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

export const addStudents = createAsyncThunk(
   'student/addStudents',
   async (data, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post('student', data)
         const result = response.data
         dispatch(getAllStudents())
         return result
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

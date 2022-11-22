/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../../api/axiosConfig'

export const getCourses = createAsyncThunk(
   'instructor-courses/get',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('course')
         const { data } = response
         return data
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

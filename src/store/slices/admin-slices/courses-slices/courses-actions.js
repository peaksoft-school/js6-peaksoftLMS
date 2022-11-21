import { createAsyncThunk } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import axiosInstace from '../../../../api/axiosConfig'

export const getCourse = createAsyncThunk(
   'coursesSlices/getCourse',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstace.get('course')
         const { data } = response
         return data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

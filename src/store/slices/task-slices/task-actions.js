/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../api/axiosConfig'

export const saveTask = createAsyncThunk(
   'task/save',
   async (data, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('task', data)
         const result = response.data
         return result
      } catch (err) {
         return rejectWithValue(err.message)
      }
   }
)

/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../../../api/axiosConfig'

export const getCoursesLessons = createAsyncThunk(
   'instructor-materials/getLessons',
   async (id, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`lesson/course/${id}`)
         const { data } = response
         return data
      } catch (err) {
         return rejectWithValue(err.response.data.message)
      }
   }
)
export const deleteLesson = createAsyncThunk(
   'instructor-materials/deleteLesson',
   async (incomingData, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.delete(`lesson/${incomingData.id}`)
         return dispatch(getCoursesLessons(incomingData.courseId))
      } catch (err) {
         return rejectWithValue(err.response.data.message)
      }
   }
)
export const createNewLessons = createAsyncThunk(
   'instructor-materials/createLessons',
   async (incomingData, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.post(`lesson`, incomingData)
         return dispatch(getCoursesLessons(incomingData.courseId))
      } catch (err) {
         return rejectWithValue(err.response.data.message)
      }
   }
)
export const renameLessons = createAsyncThunk(
   'instructor-materials/createLessons',
   async ({ sendedData, lessonId }, { rejectWithValue, dispatch }) => {
      try {
         await axiosInstance.put(`lesson/${lessonId}`, sendedData)
         return dispatch(getCoursesLessons(sendedData.courseId))
      } catch (err) {
         return rejectWithValue(err.response.data.message)
      }
   }
)

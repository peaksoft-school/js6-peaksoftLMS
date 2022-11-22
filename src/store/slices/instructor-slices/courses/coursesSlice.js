/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { getCourses } from './course-actions'

const initialState = {
   courses: [],
   status: null,
   error: null,
}

export const InsCoursesSlice = createSlice({
   name: 'instructor-courses',
   initialState,
   reducers: {},
   extraReducers: {
      // * getting all courses
      [getCourses.pending]: (state) => {
         state.status = 'loading'
      },
      [getCourses.fulfilled]: (state, { payload }) => {
         state.status = null
         state.courses = payload
      },
      [getCourses.rejected]: (state, { payload }) => {
         state.status = 'rejected'
         state.error = payload
      },
   },
})

export const insCourseAction = InsCoursesSlice.actions

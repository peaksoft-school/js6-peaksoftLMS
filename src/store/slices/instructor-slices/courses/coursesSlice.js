/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import {
   assignGroups,
   getCourses,
   getCourseStudentsById,
} from './course-actions'

const initialState = {
   courses: [],
   courseStudents: [],
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
         state.error = `Ошибка: ${payload}`
      },
      // * assigning groups to course
      [assignGroups.fulfilled]: (state) => {
         state.status = 'assigned'
      },
      [assignGroups.rejected]: (state, { payload }) => {
         state.status = 'rejected'
         state.error = `Ошибка: ${payload}`
      },
      // * getting all students of course
      [getCourseStudentsById.pending]: (state) => {
         state.status = 'loading'
      },
      [getCourseStudentsById.fulfilled]: (state, { payload }) => {
         state.status = null
         state.courseStudents = payload
         state.error = null
      },
      [getCourseStudentsById.rejected]: (state, { payload }) => {
         state.status = 'rejected'
         state.error = `Ошибка: ${payload}`
      },
   },
})

export const insCourseAction = InsCoursesSlice.actions

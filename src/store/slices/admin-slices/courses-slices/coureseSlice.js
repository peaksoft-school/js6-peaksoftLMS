import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
   deleteCourse,
   editCourse,
   getCourse,
   postCourses,
   getAllTeacher,
   assignCourseinstructor,
} from './courses-actions'

const initialState = { courses: [], status: null, error: null, teachers: [] }

export const coursesSlice = createSlice({
   name: 'coursesSlices',
   initialState,
   reducers: {},
   extraReducers: {
      [getCourse.pending]: (state) => {
         state.status = 'loading'
      },
      [getCourse.fulfilled]: (state, { payload }) => {
         state.status = 'success'
         state.courses = payload
      },
      [getCourse.rejected]: (state, { payload }) => {
         state.status = null
         state.error = payload
      },
      [postCourses.pending]: (state) => {
         state.status = 'loading'
      },
      [postCourses.fulfilled]: (state) => {
         state.status = 'created'
      },
      [postCourses.rejected]: (state) => {
         state.status = 'rejected'
         state.error = 'Не удалось создать курс, проверьте заполнение'
      },
      // * deleting course
      [deleteCourse.fulfilled]: (state) => {
         state.status = 'deleted'
      },
      [editCourse.fulfilled]: (state) => {
         state.status = 'edited'
      },
      [editCourse.rejected]: (state) => {
         state.error = 'Не удалось провести редактирование'
      },
      [getAllTeacher.fulfilled]: (state, { payload }) => {
         state.teachers = payload
      },
      [assignCourseinstructor.fulfilled]: (state) => {
         state.status = 'assigned'
      },
   },
})

export const courseActions = coursesSlice.actions

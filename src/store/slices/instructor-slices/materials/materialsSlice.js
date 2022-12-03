/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { setError, setLoading } from '../../../../utils/helpers/helper'
import {
   createNewLessons,
   deleteLesson,
   getCoursesLessons,
} from './materials-actions'

const initialState = {
   lessons: [],
   status: null,
   error: null,
}

export const insMaterials = createSlice({
   name: 'instructor-courses',
   initialState,
   reducers: {},
   extraReducers: {
      // * get all lessons
      [getCoursesLessons.pending]: setLoading,
      [getCoursesLessons.fulfilled]: (state, { payload }) => {
         state.status = null
         state.lessons = payload
      },
      [getCoursesLessons.rejected]: setError,

      // * deleting lesson
      [deleteLesson.pending]: setLoading,
      [deleteLesson.fulfilled]: (state) => {
         state.status = 'deleted'
      },
      [deleteLesson.rejected]: setError,
      // * creating new lesson
      [createNewLessons.fulfilled]: (state) => {
         state.status = 'created'
      },
      [createNewLessons.rejected]: setError,
   },
})

export const insMaterialsAction = insMaterials.actions

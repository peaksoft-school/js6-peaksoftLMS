/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import {
   addStudents,
   getAllStudents,
   getFilteredlStudents,
} from './student-actions'

const initialState = {
   students: [],
   status: null,
   error: null,
}

export const adminStudentSlice = createSlice({
   name: 'student',
   initialState,
   reducers: {},
   extraReducers: {
      // get all students
      [getAllStudents.pending]: (state) => {
         state.status = 'loading'
      },
      [getAllStudents.fulfilled]: (state, action) => {
         state.students = action.payload
         state.status = 'success'
      },
      [getAllStudents.rejected]: (state, action) => {
         state.status = null
         state.error = action.payload
      },

      // format learning
      [getFilteredlStudents.pending]: (state) => {
         state.status = 'loading'
      },
      [getFilteredlStudents.fulfilled]: (state) => {
         state.status = 'success'
         // state.students = action.payload
      },
      [getFilteredlStudents.rejected]: (state, action) => {
         state.status = null
         state.error = action.payload
      },

      // post all students
      [addStudents.pending]: (state) => {
         state.status = 'loading'
      },
      [addStudents.fulfilled]: (state) => {
         state.status = 'success'
      },
      [addStudents.rejected]: (state) => {
         state.status = 'rejected'
         state.error = 'Произошла ошибка, не удалось создать студента'
      },
   },
})

export const groupsAction = adminStudentSlice.actions

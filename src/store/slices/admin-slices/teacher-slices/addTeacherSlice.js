/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import {
   addTeacher,
   deleteTeacher,
   getAllTeacher,
   renameTeacher,
} from './teacherActions'

const initialState = {
   teachers: [],
   getTeacher: [],
   rename: [],
   status: null,
   error: null,
}
export const teacherAdminSlice = createSlice({
   name: 'teacherAdmin',
   initialState,
   reducers: {},
   extraReducers: {
      [addTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [addTeacher.fulfilled]: (state, { payload }) => {
         state.status = 'Учитель успешно добавлень'
         state.teachers = payload
         // console.log('payload', payload)
      },
      [addTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
      [getAllTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [getAllTeacher.fulfilled]: (state, action) => {
         state.status = 'success'
         state.getTeacher = action.payload
      },
      [getAllTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
      [deleteTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [deleteTeacher.fulfilled]: (state) => {
         state.status = 'success'
         // state.getTeacher = action.payload
      },
      [deleteTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
      [renameTeacher.pending]: (state) => {
         state.status = 'loading'
      },
      [renameTeacher.fulfilled]: (state, action) => {
         state.status = 'success'
         state.rename = action.payload
         console.log(state.rename)
      },
      [renameTeacher.rejected]: (state, { payload }) => {
         state.status = 'error'
         state.error = payload
      },
   },
})

export const userAction = teacherAdminSlice.actions

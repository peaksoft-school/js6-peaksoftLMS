/* eslint-disable import/no-cycle */
import { createSlice } from '@reduxjs/toolkit'
import { saveTask } from './task-actions'

const initialState = {
   task: [],
   status: null,
   error: null,
}

export const taskSlice = createSlice({
   name: 'task',
   initialState,
   reducers: {
      getDataFromTask: (state, action) => {
         state.task.push(action.payload)
      },
   },
   extraReducers: {
      // post SaveTask
      [saveTask.pending]: (state) => {
         state.status = 'loading'
      },
      [saveTask.fulfilled]: (state) => {
         state.status = 'success'
      },
      [saveTask.rejected]: (state) => {
         state.status = 'rejected'
      },
   },
})

export const { getDataFromTask } = taskSlice.actions

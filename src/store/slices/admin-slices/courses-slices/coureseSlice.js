import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getCourse } from './courses-actions'

const initialState = { courses: [], status: null, error: null }

export const cursesSlice = createSlice({
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
   },
})

export const courseActions = cursesSlice.actions

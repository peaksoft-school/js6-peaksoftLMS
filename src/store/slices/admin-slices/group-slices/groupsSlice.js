import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
   getGroups,
   postGroups,
   getGroupsById,
   getGroupStudentById,
} from './group-actions'
import { setError, setLoading } from '../../../../utils/helpers/helper'

const initialState = {
   groups: [],
   status: null,
   error: null,
   singleGroup: [],
   groupStudents: [],
}

export const groupsSlice = createSlice({
   name: 'admin-groups',
   initialState,
   reducers: {},
   extraReducers: {
      // * geting all gruoups redusers
      [getGroups.pending]: setLoading,
      [getGroups.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.groups = payload
      },
      [getGroups.rejected]: setError,

      // * get single group by id
      [getGroupsById.fulfilled]: (state, { payload }) => {
         state.singleGroup = payload
      },

      // * get students particular group by id
      [getGroupStudentById.fulfilled]: (state, { payload }) => {
         state.groupStudents = payload
      },

      // * creating groups redusers
      [postGroups.pending]: setLoading,
      [postGroups.fulfilled]: (state) => {
         state.status = 'Группа создана успешно'
      },
      [postGroups.rejected]: setError,
   },
})

export const groupsAction = groupsSlice.actions

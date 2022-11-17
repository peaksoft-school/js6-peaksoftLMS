import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import { getGroups, postGroups, getGroupsById } from './group-actions'
import { setError, setLoading } from '../../../../utils/helpers/helper'

const initialState = {
   groups: [],
   status: null,
   error: null,
   singleGroup: [],
}

export const groupsSlice = createSlice({
   name: 'admin-groups',
   initialState,
   reducers: {},
   extraReducers: {
      // get gruoups redusers
      [getGroups.pending]: setLoading,
      [getGroups.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.groups = payload
      },
      [getGroups.rejected]: setError,

      [getGroupsById.fulfilled]: (state, action) => {
         state.singleGroup = action.payload
      },
      // post groups redusers
      [postGroups.pending]: setLoading,
      [postGroups.fulfilled]: (state) => {
         state.status = 'Группа создана успешно'
      },
      [postGroups.rejected]: setError,
   },
})

export const groupsAction = groupsSlice.actions

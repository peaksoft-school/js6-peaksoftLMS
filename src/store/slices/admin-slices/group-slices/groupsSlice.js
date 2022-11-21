import { createSlice } from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import {
   getGroups,
   postGroups,
   editGroups,
   getGroupsById,
   getGroupStudentById,
} from './group-actions'

const initialState = {
   groups: [],
   status: null,
   error: null,
   editStatus: null,
   editError: null,
   singleGroup: [],
   groupStudents: [],
}

export const groupsSlice = createSlice({
   name: 'admin-groups',
   initialState,
   reducers: {},
   extraReducers: {
      // * geting all gruoups redusers
      [getGroups.pending]: (state) => {
         state.status = 'loading'
      },
      [getGroups.fulfilled]: (state, { payload }) => {
         state.status = 'succes'
         state.groups = payload
      },
      [getGroups.rejected]: (state) => {
         state.error = 'Произошла ошибка, не удалось загрузить группы'
         state.status = 'rejected'
      },

      // * get single group by id
      [getGroupsById.fulfilled]: (state, { payload }) => {
         state.singleGroup = payload
      },

      // * get students particular group by id
      [getGroupStudentById.pending]: (state) => {
         state.status = 'loading'
      },
      [getGroupStudentById.fulfilled]: (state, { payload }) => {
         state.groupStudents = payload
         state.status = 'succes'
      },
      [getGroupStudentById.rejected]: (state) => {
         state.error = 'Произошла ошибка, не удалось загрузить данные'
         state.status = 'rejected'
      },

      // * creating groups redusers
      [postGroups.fulfilled]: (state) => {
         state.status = 'Группа создана успешно'
      },
      [postGroups.rejected]: (state) => {
         state.error = 'Произошла ошибка, не удалось создать группу'
         state.status = 'rejected'
      },
      // * editing and updating groups
      [editGroups.fulfilled]: (state) => {
         state.editGroups = 'Группа отредактирована успешно'
      },
      [editGroups.rejected]: (state) => {
         state.editError = 'Не удалось провести редактирование'
      },
   },
})

export const groupsAction = groupsSlice.actions

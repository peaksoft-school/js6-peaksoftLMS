/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
import { groupsSlice } from './slices/admin-slices/group-slices/groupsSlice'
import { teacherAdminSlice } from './slices/admin-slices/teacher-slices/addTeacherSlice'

const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      groups: groupsSlice.reducer,
      teacher: teacherAdminSlice.reducer,
   },
})

export default store

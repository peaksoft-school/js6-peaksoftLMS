/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
import { groupsSlice } from './slices/admin-slices/group-slices/groupsSlice'
import { InsCoursesSlice } from './slices/instructor-slices/courses/coursesSlice'
import { teacherAdminSlice } from './slices/admin-slices/teacher-slices/addTeacherSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      groups: groupsSlice.reducer,
      insCourses: InsCoursesSlice.reducer,
      teacher: teacherAdminSlice.reducer,
   },
})
export default store

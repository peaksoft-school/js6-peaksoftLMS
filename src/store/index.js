/* eslint-disable import/no-cycle */
import { configureStore } from '@reduxjs/toolkit'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
import { groupsSlice } from './slices/admin-slices/group-slices/groupsSlice'
import { InsCoursesSlice } from './slices/instructor-slices/courses/coursesSlice'
import { teacherAdminSlice } from './slices/admin-slices/teacher-slices/addTeacherSlice'
import { insMaterials } from './slices/instructor-slices/materials/materialsSlice'

const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      groups: groupsSlice.reducer,
      insCourses: InsCoursesSlice.reducer,
      teacher: teacherAdminSlice.reducer,
      materials: insMaterials.reducer,
   },
})

export default store

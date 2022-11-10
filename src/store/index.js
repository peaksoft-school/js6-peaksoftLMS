import { configureStore } from '@reduxjs/toolkit'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
// import { teacherAdminSlice } from './slices/admin-slices/teacher-slices/addTeacherSlice'

const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      // addTeacher: teacherAdminSlice.reducer,
   },
})

export default store

import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
// eslint-disable-next-line import/no-cycle
import { groupsSlice } from './slices/admin-slices/group-slices/groupsSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      groups: groupsSlice.reducer,
   },
})
export default store

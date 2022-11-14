import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'

const store = configureStore({
   reducer: {
      user: userSlice.reducer,
      auth: authSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
   },
})
export default store

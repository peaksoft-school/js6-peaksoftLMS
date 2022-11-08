import { configureStore } from '@reduxjs/toolkit'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'

const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
   },
})

export default store

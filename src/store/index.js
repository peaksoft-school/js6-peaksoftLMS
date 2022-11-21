import { configureStore } from '@reduxjs/toolkit'
import { forgotPassSlice } from './slices/forgotPassSlice'
import { resetPassSlice } from './slices/resetPasswordSlice'
import { userSlice } from './slices/userSlice'
// eslint-disable-next-line import/no-cycle
import { cursesSlice } from './slices/admin-slices/courses-slices/coureseSlice'

const store = configureStore({
   reducer: {
      auth: userSlice.reducer,
      email: forgotPassSlice.reducer,
      newPassword: resetPassSlice.reducer,
      course: cursesSlice.reducer,
   },
})

export default store

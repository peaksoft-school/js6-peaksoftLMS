import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   userData: [],
   status: null,
   error: null,
}
export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {},
})
// export const {} = userSlice.actions
export default userSlice

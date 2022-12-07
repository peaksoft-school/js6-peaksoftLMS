import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   title: [],
}
export const testSlice = createSlice({
   name: 'test',
   initialState,
   reducers: {
      addItem(state, action) {
         state.title.push(action.payload)
      },
      addTitle(state, action) {
         const newTitle = state.title.find((item) => {
            return item.id === action.payload.i
         })
         console.log(action.payload)
         console.log(newTitle)
         newTitle.subtask.push(action.payload.subtask)
      },
      //   removeItem(state, action) {
      //      console.log(action.payload, 'action')
      //      const arr = state.title?.map((i) => {
      //         const arr = i.items?.filter((i) => i.id !== action.payload)
      //         return { title: i.title, id: i.id, items: arr }
      //      })
      //      console.log(arr, 'arr')
      //      state.title = arr
      //   },
   },
})

export const { addTitle, addItem } = testSlice.actions
export default testSlice

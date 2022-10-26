import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../containers/NotFoundPage'

export const StudentRoutes = () => {
   return (
      <Routes>
         <Route
            path="/student"
            index
            element={<div>Student default page</div>}
         />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

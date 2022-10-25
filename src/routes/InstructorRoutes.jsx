import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../containers/NotFoundPage'

export const InstructorRoutes = () => {
   return (
      <Routes>
         <Route
            path="/some-admin"
            index
            element={<div>Instructor default page</div>}
         />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

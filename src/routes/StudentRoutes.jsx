import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../containers/NotFoundPage'

export const StudentRoutes = () => {
   return (
      <Routes>
         <Route element={<Navigate to="/courses" />} />
         <Route
            path="/student"
            index
            element={<div>Student default page</div>}
         />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

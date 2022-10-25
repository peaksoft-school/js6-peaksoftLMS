import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../containers/NotFoundPage'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route
            path="/some-admin"
            index
            element={<div>Admin default page</div>}
         />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

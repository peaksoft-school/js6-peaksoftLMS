import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/" index element={<div>Admin default page</div>} />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

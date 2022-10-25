import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './NotFoundPage'

export const StudentRoutes = () => {
   return (
      <Routes>
         <Route path="/" index element={<div>Student default page</div>} />
         <Route path="*" index element={<NotFoundPage />} />
      </Routes>
   )
}

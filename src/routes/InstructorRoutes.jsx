import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InstructorMain } from '../containers/instructor/InstructorMain'
import { NotFoundPage } from '../containers/NotFoundPage'
import SidebarLayout from '../layout/SidebarLayout'

export const InstructorRoutes = () => {
   return (
      <SidebarLayout>
         <Routes>
            <Route path="/" index element={<InstructorMain />} />
            <Route path="*" index element={<NotFoundPage />} />
         </Routes>
      </SidebarLayout>
   )
}

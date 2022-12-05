import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentLayout from '../components/student/StudentLayout'
import { NotFoundPage } from '../containers/NotFoundPage'
import StudentMain from '../containers/student/StudentMain'
import SidebarLayout from '../layout/SidebarLayout'

export const StudentRoutes = () => {
   return (
      <SidebarLayout>
         <Routes>
            <Route path="/" element={<StudentLayout />}>
               <Route index element={<StudentMain />} />
            </Route>
            <Route path="*" index element={<NotFoundPage />} />
         </Routes>
      </SidebarLayout>
   )
}

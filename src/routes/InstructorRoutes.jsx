import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InstructorLayout } from '../components/instructor/InstructorLayout'
import { InstructorMain } from '../containers/instructor/InstructorMain'
import { InstructorMaterials } from '../containers/instructor/InstructorMaterials'
import { InstructorStudents } from '../containers/instructor/InstructorStudents'
import { NotFoundPage } from '../containers/NotFoundPage'
import SidebarLayout from '../layout/SidebarLayout'

export const InstructorRoutes = () => {
   return (
      <SidebarLayout>
         <Routes>
            <Route path="/" element={<InstructorLayout />}>
               <Route index element={<InstructorMain />} />
               <Route
                  path="course-students/:id"
                  element={<InstructorStudents />}
               />
               <Route path="materials/:id" element={<InstructorMaterials />} />
            </Route>
            <Route path="*" index element={<NotFoundPage />} />
         </Routes>
      </SidebarLayout>
   )
}

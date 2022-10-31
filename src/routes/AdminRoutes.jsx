import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CoursesPage } from '../containers/admin/CoursesPage'
import { GroupsPage } from '../containers/admin/GroupsPage'
import { StudentsPage } from '../containers/admin/StudentsPage'
import { TeachersPage } from '../containers/admin/TeachersPage'
import { NotFoundPage } from '../containers/NotFoundPage'

export const AdminRoutes = () => {
   return (
      <Routes>
         <Route path="/" index element={<GroupsPage />} />
         <Route path="/courses/*" element={<CoursesPage />}>
            <Route path="teachers" element={<TeachersPage />} />
            <Route path="students" element={<StudentsPage />} />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   )
}

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CoursesPage } from '../containers/admin/CoursesPage'
import { CourseStudentsPage } from '../containers/admin/CourseStudentsPage'
import { CourseTeachersPage } from '../containers/admin/CourseTeachersPage'
import { GroupsInnerPage } from '../containers/admin/GroupsInnerPage'
import { GroupsPage } from '../containers/admin/GroupsPage'
import { StudentsPage } from '../containers/admin/StudentsPage'
import { TeachersPage } from '../containers/admin/TeachersPage'
import { NotFoundPage } from '../containers/NotFoundPage'
import SidebarLayout from '../layout/SidebarLayout'

export const AdminRoutes = () => {
   return (
      <SidebarLayout>
         <Routes>
            <Route path="/" element={<GroupsPage />}>
               <Route path="group-students" element={<GroupsInnerPage />} />
            </Route>
            <Route path="/courses/*" element={<CoursesPage />}>
               <Route index path="teachers" element={<CourseTeachersPage />} />
               <Route path="students" element={<CourseStudentsPage />} />
            </Route>
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </SidebarLayout>
   )
}

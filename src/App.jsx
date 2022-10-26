import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SidebarLayout from './layout/Sidebar-layout'
import { AppRoutes } from './routes/AppRoutes'
// import GroupSvg from './assets/GroupsVector.svg'
// import TeachersSvg from './assets/teachersVector.svg'
import CoursesSvg from './assets/coursesVector.svg'
// import StudentSvg from './assets/studentsVector.svg'

export const App = () => {
   const DUMMY_DATA = [
      {
         title: 'Мои курсы',
         id: 1,
         photo: CoursesSvg,
      },
      // {
      //    title: 'Группы',
      //    id: 1,
      //    path: '/groups',
      //    photo: GroupSvg,
      // },
      // {
      //    title: 'Курсы ',
      //    id: 2,
      //    path: '/courses',
      //    photo: CoursesSvg,
      // },
      // {
      //    title: 'Учителя',
      //    path: '/instructors',

      //    id: 3,
      //    photo: TeachersSvg,
      // },
      // {
      //    title: 'Студенты',
      //    path: '/students',
      //    id: 4,
      //    photo: StudentSvg,
      // },
   ]
   const location = useLocation()
   if (location.pathname === '/') return <Navigate to="/login" replace />

   return (
      <div>
         <AppRoutes />
         <SidebarLayout data={DUMMY_DATA} />
      </div>
   )
}

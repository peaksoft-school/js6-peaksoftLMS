import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../containers/LoginPage'
import { AdminRoutes } from './AdminRoutes'
import { StudentRoutes } from './StudentRoutes'
import { InstructorRoutes } from './InstructorRoutes'
import { PrivateRoute } from './PrivateRoute'
import { ROUTES } from '../utils/constants/constants'

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path={ROUTES.LOGIN} element={<LoginPage />} />
         <Route
            path={ROUTES.ADMIN}
            element={<PrivateRoute roles="ADMIN" Component={<AdminRoutes />} />}
         />
         <Route
            path={ROUTES.INSTRUCTOR}
            element={
               <PrivateRoute
                  roles="INSTRUCTOR"
                  Component={<InstructorRoutes />}
               />
            }
         />
         <Route
            path={ROUTES.STUDENT}
            element={
               <PrivateRoute roles="STUDENT" Component={<StudentRoutes />} />
            }
         />
      </Routes>
   )
}

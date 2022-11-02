import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

export const App = () => {
   const { role } = useSelector((state) => state.user)
   useEffect(() => {
      check(role)
   }, [role])
   const navigate = useNavigate()
   const location = useLocation()
   if (location.pathname === '/') return <Navigate to="/login" replace />
   const check = (role) => {
      if (role === 'ADMIN') {
         console.log(role, 'role')
         navigate('/admin')
      } else if (role === 'INSTRUCTOR') {
         navigate('/instructor')
      } else if (role === 'STUDENT') {
         navigate('/student')
      } else {
         navigate('/')
      }
   }

   return (
      <div>
         <AppRoutes />
      </div>
   )
}

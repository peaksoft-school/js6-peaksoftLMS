import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

export const App = () => {
   const location = useLocation()
   if (location.pathname === '/') return <Navigate to="/login" replace />

   return <AppRoutes />
}

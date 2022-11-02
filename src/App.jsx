import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import SidebarLayout from './layout/SidebarLayout'

export const App = () => {
   const location = useLocation()
   if (location.pathname === '/') return <Navigate to="/login" replace />

   return (
      <div>
         <SidebarLayout />
      </div>
   )
}

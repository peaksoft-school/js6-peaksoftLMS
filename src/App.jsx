import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import CreateTask from './components/UI/createTask/CreateTask'
// import { AppRoutes } from './routes/AppRoutes'

export const App = () => {
   const location = useLocation()
   if (location.pathname === '/') return <Navigate to="/login" replace />

   return (
      <div>
         <CreateTask />
      </div>
   )
}

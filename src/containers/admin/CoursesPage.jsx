import React from 'react'
import { Outlet } from 'react-router-dom'

export const CoursesPage = () => {
   return (
      <div>
         <p>Hello Courses</p>
         <Outlet />
      </div>
   )
}

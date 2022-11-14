import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderLogout from '../../components/UI/HeaderLogout'

export const GroupsPage = () => {
   return (
      <>
         <div>GroupsPage</div> <HeaderLogout />
         <Outlet />
      </>
   )
}

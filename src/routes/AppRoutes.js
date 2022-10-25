import React from 'react'
import { ROUTES } from '../utils/constants/constants'
import { DefaultRoute } from './DefaultRoute'

export const AppRoutes = ({ roleName = '' } /* заглушка пропса */) => {
   // функционал получения токена и состояния с редакса

   const currentRoute = ROUTES.find((o) => o.role === roleName)
   if (currentRoute) {
      return currentRoute.route
   }
   return <DefaultRoute />
}

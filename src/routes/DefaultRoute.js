import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../containers/LoginPage'

export const DefaultRoute = () => {
   return (
      <Routes>
         <Route path="/" element={<LoginPage />} />
      </Routes>
   )
}

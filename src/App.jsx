import React from 'react'
import HeaderSidebarLayouts from './components/UI/HeaderSidebarLayouts'

export const App = () => {
   const DUMMY_DATA = [
      {
         title: 'Мои курсы',
         // title: 'Группы',
         id: 1,
      },
      // {
      //    title: 'Курсы ',
      //    id: 2,
      // },
      // {
      //    title: 'Учителя',
      //    id: 3,
      // },
      // {
      //    title: 'Студенты',
      //    id: 4,
      // },
   ]
   return (
      <div>
         <HeaderSidebarLayouts data={DUMMY_DATA} />
      </div>
   )
}

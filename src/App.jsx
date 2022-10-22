import React from 'react'

import HeaderSidebarLayouts from './components/UI/HeaderSidebarLayouts'

export const App = () => {
   const DUMMY_DATA = [
      // {
      //    title: 'Группы',
      //    id: 1,
      // },
      {
         title: 'Курсы ',
         id: 2,
      },
      // {
      //    title: 'Учителя',
      //    id: 3,
      // },
      // {
      //    title: 'Студенты',
      //    id: 4,
      // },
      // {
      //    title: 'Ramazan',
      //    id: 5,
      // },
   ]
   return (
      <div style={{ marginLeft: '200px' }}>
         <HeaderSidebarLayouts data={DUMMY_DATA} />
      </div>
   )
}

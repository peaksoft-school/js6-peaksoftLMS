import React from 'react'
import { ModalWindow } from './components/UI/ModalWindow'

export const App = () => {
   return (
      <div>
         <ModalWindow
            modalTitle="some long title"
            headerContent="some header content"
            bodyContent="some body content"
            footerContent="some footer content"
         />
      </div>
   )
}

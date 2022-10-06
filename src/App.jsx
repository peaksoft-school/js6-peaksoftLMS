import { Button } from '@mui/material'
import React, { useState } from 'react'
import { ModalWindow } from './components/UI/ModalWindow'

export const App = () => {
   const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true)
   const handleClose = () => setOpen(false)
   return (
      <div>
         <Button onClick={handleOpen} variant="contained">
            Contained
         </Button>

         <ModalWindow
            open={open}
            handleClose={handleClose}
            modalTitle="some long title"
            headerContent="some header content"
            bodyContent="some body content"
            footerContent="some footer content"
         />
      </div>
   )
}

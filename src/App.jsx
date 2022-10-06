import { Button } from '@mui/material'
import React, { useState } from 'react'
import { ModalWindow } from './components/UI/ModalWindow'

export const App = () => {
<<<<<<< HEAD
   return <div> </div>
=======
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
>>>>>>> 670b2885cc68fbaf3f61ed2a9df609d9450b4e56
}

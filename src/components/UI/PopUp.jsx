import { Alert, Button, Snackbar } from '@mui/material'
import React, { useState } from 'react'
import ErrorIcon from '../../assets/error.png'
import SuccesIcon from '../../assets/success.svg'

export const PopUp = ({ message, messageType }) => {
   const [open, setOpen] = useState(true)

   const handleClick = () => {
      setOpen((prev) => !prev)
   }
   const handleClose = (reason) => {
      if (reason === 'clickaway') {
         return
      }
      setOpen(false)
   }

   return (
      <div>
         <Button onClick={handleClick}>Open simple snackbar</Button>
         <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
         >
            <Alert
               variant="filled"
               iconMapping={{ error: ErrorIcon, success: SuccesIcon }}
               severity={messageType}
            >
               {message}
            </Alert>
         </Snackbar>
      </div>
   )
}

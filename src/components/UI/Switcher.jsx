import * as React from 'react'
import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

const IOSSwitch = styled((props) => (
   // eslint-disable-next-line react/jsx-props-no-spreading
   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
   width: 51,
   height: 31,
   padding: 0,
   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      color: 'red',
      '&.Mui-checked': {
         transform: 'translateX(16px)',

         '& + .MuiSwitch-track': {
            backgroundColor: ' #FFFFFF',
            opacity: 1,
            border: 0,
         },
         '&.Mui-disabled + .MuiSwitch-track': {
            opacity: 0.5,
         },
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
         color:
            theme.palette.mode === 'light'
               ? theme.palette.grey[100]
               : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
         opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
   },
   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 27,
      height: 27,
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      background: '#fff',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
         duration: 500,
      }),
   },
}))
export default function CustomizedSwitches() {
   return (
      <FormGroup>
         <FormControlLabel
            color="error"
            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
         />
      </FormGroup>
   )
}

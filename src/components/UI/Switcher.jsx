import { FormControlLabel, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

const Switcher = (value) => {
   const [isEnabled, setIsEnabled] = useState(true)
   const clickHandler = () => {
      setIsEnabled((previousState) => {
         return !previousState
      })
   }
   return (
      <FormControl
         value={value}
         sx={{
            color: isEnabled ? 'green' : 'red',
            bgcolor: isEnabled
               ? 'rgba(54, 172, 12, 0.1)'
               : 'rgba(201, 30, 30, 0.1)',
         }}
         label={isEnabled ? 'Ответы принимаются' : 'Ответы не принимаются'}
         labelPlacement="start"
         onChange={clickHandler}
         control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
      />
   )
}
export default Switcher
const FormControl = styled(FormControlLabel)({
   padding: '20px',
   width: '1140px',
   height: '68px',
   left: '0px',
   top: '142px',
   border: '1px solid #d4d4d4',
   borderRadius: '10px',

   '&    .Mui-disabled  ': {
      background: 'red',
      height: '100px',
   },
})

const CustomSwitch = styled((props) => (
   <Switch size="medium" focusVisibleClassName=".Mui-focusVisible" {...props} />
))(() => ({
   width: 51,
   height: 30,
   padding: 0,
   borderRadius: 100,
   '& .MuiSwitch-switchBase': {
      padding: 4,
      margin: 1,
      color: '#C91E1E',
      '&.Mui-checked': {
         transform: 'translateX(20px)',
         color: '#36AC0C',
         '& + .MuiSwitch-track': {
            backgroundColor: '#fff',
            opacity: 1,
            border: 0,
         },
      },
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#fff  ',
      opacity: 1,
   },
}))

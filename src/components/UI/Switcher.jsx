/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabel, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Switcher = () => {
   return (
      <FormControlLabel
         control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
      />
   )
}
const CustomSwitch = styled((props) => (
   <Switch size="medium" focusVisibleClassName=".Mui-focusVisible" {...props} />
))(({ theme }) => ({
   width: 42,
   height: 26,
   padding: 0,
   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      color: '#C91E1E',
      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#36AC0C',
         '& + .MuiSwitch-track': {
            backgroundColor:
               theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            border: 0,
         },
      },
   },
   '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
   },
}))

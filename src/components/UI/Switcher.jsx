/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabel, Switch } from '@mui/material'
import { styled } from '@mui/material/styles'

const Switcher = ({ clickHandler }) => {
   return (
      <FormControlLabel
         onClick={clickHandler}
         control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
      />
   )
}
export default Switcher

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
      backgroundColor: '#fff',
      opacity: 1,
   },
}))

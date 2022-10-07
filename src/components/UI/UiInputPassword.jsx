// import styled from 'styled-components'
import { useState } from 'react'
// import { InputViewOff, InputViewOn } from 'assets/icons/index'
import {
   FormControl,
   InputLabel,
   IconButton,
   //    InputAdornment,
   OutlinedInput,
   VisibilityOff,
   Visibility,
} from '@mui/material'

const UiInputPassword = () => {
   const [values, setValues] = useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
   })

   function handleViewOnOff() {
      setValues((prevState) => !prevState)
   }
   return (
      <div>
         <FormControl>
            <InputLabel>Password</InputLabel>
            <OutlinedInput
               error={false}
               type={values ? 'password' : 'text'}
               endAdornment={
                  <IconButton onClick={() => handleViewOnOff()}>
                     {values ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
               }
               label="Password"
            />
         </FormControl>
      </div>
   )
}

export default UiInputPassword

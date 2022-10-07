import styled from 'styled-components'
import { useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, OutlinedInput, FormControl } from '@mui/material'

const UiInputPassword = ({ error, placeholder, onChange }) => {
   const [values, setValues] = useState(false)

   function handleViewOnOff() {
      setValues((prevState) => !prevState)
   }
   return (
      <FormControl>
         <InputPassword
            onChange={onChange}
            placeholder={placeholder}
            error={error}
            type={values ? 'text' : 'password'}
            endAdornment={
               <IconButton onClick={() => handleViewOnOff()}>
                  {values ? <Visibility /> : <VisibilityOff />}
               </IconButton>
            }
         />
      </FormControl>
   )
}

export default UiInputPassword
const InputPassword = styled(OutlinedInput)`
   &:hover {
      border: none;
   }
   &.MuiInputBase-root {
      height: 42px;
      border-radius: 8px;
      background: #ffffff;
      caret-color: #258aff;
   }

   &.MuiOutlinedInput-notchedOutline {
      border: solid 1px #d4d4d4;
   }
   &.Mui-focused {
      border: none;
   }
`

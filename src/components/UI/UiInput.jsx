import { TextField } from '@mui/material'
import styled from 'styled-components'

const UiInput = ({ value, placeholder, type, error, id, width }) => {
   return (
      <Input
         value={value}
         error={error}
         placeholder={placeholder}
         type={type}
         id={id}
         width={width}
      />
   )
}

export default UiInput

const Input = styled(TextField)`
   & .MuiOutlinedInput-root {
      color: #292929;
      height: 42px;
      border-radius: 10px;
      background: #ffffff;
      caret-color: #258aff;
      width: ${(props) => props.width};
   }

   &.MuiOutlinedInput-notchedOutline {
      border: solid 1px #d4d4d4;
   }
   &.Mui-focused {
      border: none;
   }
`

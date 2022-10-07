import { TextField } from '@mui/material'
import styled from 'styled-components'

const UiInput = ({ ...props }) => {
   return <Input {...props} />
}

export default UiInput

const Input = styled(TextField)`
   & .MuiOutlinedInput-root {
      color: #292929;
      height: 42px;
      border-radius: 10px;
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

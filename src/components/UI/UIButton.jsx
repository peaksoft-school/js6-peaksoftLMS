import { Button } from '@mui/material'
import styled from 'styled-components'

const UIButton = ({
   children,
   variant,
   backgroundColor,
   hover,
   checked,
   startIcon,
   ...other
}) => {
   return (
      <ButtonWrap
         variant={variant}
         backgroundColor={backgroundColor}
         hover={hover}
         checked={checked}
         startIcon={startIcon}
         {...other}
      >
         {children}
      </ButtonWrap>
   )
}

export default UIButton

const ButtonWrap = styled(Button)`
   &.MuiButtonBase-root {
      background-color: ${(props) => props.backgroundColor};
   }
   &.MuiButtonBase-root:hover {
      background-color: ${(props) => props.hover};
   }
   &.MuiButtonBase-root:checked {
      background-color: ${(props) => props.checked};
   }
`

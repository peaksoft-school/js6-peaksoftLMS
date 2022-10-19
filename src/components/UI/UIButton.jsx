import { Button } from '@mui/material'
import styled from 'styled-components'

const UIButton = ({
   hover,
   variant,
   checked,
   startIcon,
   backgroundColor,
   children,
}) => {
   return (
      <ButtonWrap
         hover={hover}
         variant={variant}
         checked={checked}
         startIcon={startIcon}
         backgroundColor={backgroundColor}
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

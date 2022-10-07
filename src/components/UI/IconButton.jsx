import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const IconButton = ({
   startIcon,
   variant,
   background,
   hover,
   clicked,
   ...other
}) => {
   return (
      <ButtonIcon
         variant={variant}
         background={background}
         hover={hover}
         clicked={clicked}
         {...other}
      >
         {startIcon}
      </ButtonIcon>
   )
}

const ButtonIcon = styled(Button)`
   &.MuiButtonBase-root {
      width: 58px;
      height: 58px;
      margin: auto;
      border-radius: 50%;
      background-color: ${(props) => props.background};
      border: none;
   }
   &.MuiButtonBase-root:hover {
      background-color: ${(props) => props.hover};
   }
   &.MuiButtonBase-root:focus {
      background-color: ${(props) => props.clicked};
   }
`
export default IconButton

import { Button } from '@mui/material'
import styled from 'styled-components'

const UIButton = ({
   onClick,
   hover,
   variant,
   active,
   startIcon,
   width,
   height,
   children,
   fontSize,
   borderRadius,
   backgroundColor,
   ...other
}) => {
   return (
      <ButtonWrap
         onClick={onClick}
         hover={hover}
         variant={variant}
         active={active}
         startIcon={startIcon}
         width={width}
         height={height}
         fontSize={fontSize}
         borderRadius={borderRadius}
         backgroundColor={backgroundColor}
         {...other}
      >
         {children}
      </ButtonWrap>
   )
}

export default UIButton

const ButtonWrap = styled(Button)`
   width: ${(props) => props.width};
   height: ${(props) => props.height};
   &.MuiButtonBase-root {
      background-color: ${(props) => props.backgroundColor};
      border-radius: ${(props) => props.borderRadius};
      font-size: ${(props) => props.fontSize};
      font-family: 'Open Sans';
      font-weight: 600;
      text-transform: none;
   }
   &.MuiButtonBase-root:hover {
      background-color: ${(props) => props.hover};
   }
   &.MuiButtonBase-root:active {
      background-color: ${(props) => props.active};
   }
`

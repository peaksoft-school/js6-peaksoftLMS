import { Button } from '@mui/material'
import styled from 'styled-components'

const UIButton = ({
   marginRight,
   marginLeft,
   onClick,
   hover,
   variant,
   active,
   startIcon,
   width,
   height,
   children,
   colour,
   fontSize,
   borderradius,
   background,
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
         colour={colour}
         fontSize={fontSize}
         borderradius={borderradius}
         background={background}
         marginLeft={marginLeft}
         marginRight={marginRight}
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
      margin-left: ${(props) => props.marginLeft};
      margin-right: ${(props) => props.marginRight};
      background-color: ${(props) => props.background};
      border-radius: ${(props) => props.borderradius};
      font-size: ${(props) => props.fontSize};
      color: ${(props) => props.color};
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

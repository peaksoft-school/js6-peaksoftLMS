/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

export default function Checkboxes({ color, disabled }) {
   return (
      <div>
         <Box {...label} color={color} disabled={disabled} />
      </div>
   )
}
const Box = styled(Checkbox)`
   &.MuiCheckbox-root {
      caret-color: #1f6ed4;
   }
   &.MuiCheckbox-colorPrimary {
      :hover {
         color: #1f6ed4;
      }
      &.MuiSvgIcon-root {
         width: 21px;
         height: 21px;
      }
   }
`

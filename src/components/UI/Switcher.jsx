/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react'
import Switch from '@mui/material/Switch'
import styled from 'styled-components'

const label = { inputProps: { 'aria-label': 'Switch demo' } }

export default function BasicSwitches() {
   return (
      <ContainerSwitch>
         <Switcher {...label} />
      </ContainerSwitch>
   )
}
const ContainerSwitch = styled.div`
   height: 68px;
   width: auto;
   text-align: center;
`
const Switcher = styled(Switch)`
   /* &.MuiSwitch-track {
      height: 31px;
      width: 51px;
      background: #36ac0c;
   } */
   /* &.MuiSwitch-root {
      width: 75px;
      height: 55px;
   } */

   &.MuiSwitch-thumb {
      height: 28px;
      width: 28px;
      background: #36ac0c;
   }
`

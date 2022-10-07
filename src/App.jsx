import React from 'react'
import styled from 'styled-components'
import UiInputPassword from './components/UI/UiInputPassword'

export const App = () => {
   return (
      <Dive>
         <UiInputPassword />
      </Dive>
   )
}
const Dive = styled.div`
   background: #000;
`

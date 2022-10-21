import React from 'react'
import styled from 'styled-components'

const SidebarLayouts = () => {
   return (
      <SideBlock>
         <BlockTheme>PEAKSOFT</BlockTheme>
         <BlockDiv />
      </SideBlock>
   )
}

export default SidebarLayouts

const SideBlock = styled.div`
   background: #fff;
   width: 240px;
   height: 800px;
`
const BlockTheme = styled.h2`
   font-family: 'Poppins', sans-serif;
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 36px;
   color: #1f6ed4;
`
const BlockDiv = styled.div`
   width: 10px;
   height: 10px;
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   border-radius: 50%;
   margin-left: 50px;
`

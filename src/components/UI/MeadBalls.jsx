import React, { useState } from 'react'
import styled from 'styled-components'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

export const MeadBalls = ({ children }) => {
   const [open, isOpen] = useState(false)

   const clickHandler = () => {
      isOpen((prev) => !prev)
   }

   return (
      <>
         <IconBlock onClick={clickHandler}>
            <MoreHorizIcon fill="#343a40" />
         </IconBlock>

         {open && (
            <MenuBox>
               <p>{children}</p>
            </MenuBox>
         )}
      </>
   )
}

const IconBlock = styled.div`
   padding: 2px;
   cursor: pointer;
`
const MenuBox = styled.div`
   width: 218px;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
   border-radius: 10px;
   background: #fff;
   p {
      font-size: 16px;
      padding: 5px;
      transition: all 0.3s;
   }
   p:hover {
      background: rgba(26, 35, 126, 0.07);
   }
`

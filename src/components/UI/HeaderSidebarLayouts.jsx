import React, { useState } from 'react'
import styled from 'styled-components'
import GroupSvg from '../../assets/GroupsVector.svg'
import GroupActive from '../../assets/GroupsActive.svg'

const HeaderSidebarLayouts = (props) => {
   const [activeIndex, setActiveIndex] = useState(null)
   const { data } = props

   const activeItems = (i) => {
      setActiveIndex(i)
   }

   return (
      <BlockSide>
         <BlockHeader>
            <BlockLinear />
            <BlockTheme>PEAKSOFT</BlockTheme>
         </BlockHeader>
         <BlockItems>
            {data.map((el, i) => (
               <BlockItemsEl
                  active={activeIndex === i}
                  onClick={() => activeItems(i)}
                  key={el.id}
               >
                  <ItemsImg
                     active={activeIndex === i}
                     src={(props) => (props.active ? GroupActive : GroupSvg)}
                     alt=""
                  />
                  {el.title}
               </BlockItemsEl>
            ))}
         </BlockItems>
      </BlockSide>
   )
}

export default HeaderSidebarLayouts

const BlockSide = styled.div`
   position: relative;
   width: 240px;
   height: 875px;
   background: #fff;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 50px;
`
const BlockHeader = styled.div`
   position: relative;
   margin-top: 32px;
   display: flex;
   justify-content: center;
   align-items: flex-start;
`

const BlockTheme = styled.h2`
   font-family: 'Poppins', sans-serif;
   font-weight: 700;
   font-size: 24px;
   line-height: 36px;
   color: #1f6ed4;
`
const BlockLinear = styled.div`
   background: linear-gradient(225deg, #fa2b56 0%, #f91c3d 100%);
   width: 10px;
   height: 10px;
   border-radius: 50%;
   position: relative;
   left: 147px;
   bottom: 5px;
`

const BlockItems = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`

const BlockItemsEl = styled.div`
   position: relative;
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: 2fr 2fr 1fr;
   gap: 30px 20px;
   width: 235px;
   height: 50px;
   border-left: ${(props) => props.active && '8px solid #1f6ed4'};
   background: ${(props) => props.active && '#dde9f9'};
   border-radius: 0px 10px 10px 0px;
   list-style: none;
   font-weight: 600;
   font-size: 16px;
   color: ${(props) => (props.active ? '#1F6ED4' : '#292929')};
   margin-right: 5px;
   padding-top: 15px;
`
const ItemsImg = styled.img`
   margin-left: 55px;
`

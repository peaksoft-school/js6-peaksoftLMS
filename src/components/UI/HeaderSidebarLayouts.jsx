import React, { useState } from 'react'
import styled from 'styled-components'
import GeneragotSideBarIcons from './GeneragotSideBarIcons'
import Courses from '../../assets/coursesVector.svg'
import MyCoursesActive from '../../assets/MyCoursesActive.svg'

const HeaderSidebarLayouts = (props) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const { data } = props

   const iconsFunc = (activeIndex, i) => {
      const active = activeIndex === i
      let iconsLink

      if (i === 0) {
         iconsLink = active ? MyCoursesActive : Courses
      }

      return <img src={iconsLink} alt="icon" />
   }

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
                  <ItemsBorder active={activeIndex === i} />
                  {data.length === 4 ? (
                     <GeneragotSideBarIcons
                        index={i}
                        active={activeIndex === i}
                     />
                  ) : (
                     iconsFunc(activeIndex, i)
                  )}

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
   height: 100vh;
   background: #fff;
   display: flex;
   align-items: center;
   flex-direction: column;
   gap: 40px;
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
   cursor: pointer;
`

const BlockItemsEl = styled.div`
   position: relative;
   display: flex;
   justify-content: start;
   align-items: center;
   gap: 20px;
   width: 235px;
   height: 50px;
   background: ${(props) => props.active && '#dde9f9'};
   border-radius: 0px 10px 10px 0px;
   list-style: none;
   font-weight: 600;
   font-size: 16px;
   color: ${(props) => (props.active ? '#1F6ED4' : '#292929')};
   margin-right: 5px;
   img {
      padding-left: 23px;
   }
`
const ItemsBorder = styled.div`
   border-left: ${(props) => props.active && '8px solid #1f6ed4'};
   width: 8px;
   height: 50px;
`

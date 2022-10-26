// import { useState } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GeneragotSideBarIcons from '../components/UI/GeneratorSideBar'
import CoursesSvg from '../assets/coursesVector.svg'
import MyCoursesActive from '../assets/MyCoursesActive.svg'

const HeaderSidebarLayouts = (props) => {
   const [activeIndex, setActiveIndex] = useState(0)
   const { data } = props
   const activeItems = (i) => {
      setActiveIndex(i)
   }

   const examinationIconsArray = (activeIndex, i) => {
      const active = activeIndex === i
      let iconsLink
      if (i === 0) {
         iconsLink = active ? MyCoursesActive : CoursesSvg
      }
      return <img src={iconsLink} alt="icon" />
   }

   return (
      <BlockSide>
         <BlockHeader>
            <BlockLinear />
            <BlockTheme>PEAKSOFT</BlockTheme>
         </BlockHeader>
         <BlockItems>
            {data.map((el, i, arr) => (
               <BlockItemsEl
                  active={activeIndex === i}
                  key={el.id}
                  to={el.path}
                  onClick={() => activeItems(i)}
               >
                  <ItemsBorder active={activeIndex === i} />
                  {arr.length === 4 ? (
                     <GeneragotSideBarIcons
                        active={activeIndex === i}
                        index={i}
                     />
                  ) : (
                     examinationIconsArray(activeIndex, i)
                  )}

                  <p>{el.title}</p>
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
const BlockHeader = styled.nav`
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

const BlockItemsEl = styled(Link)`
   display: flex;
   justify-content: start;
   align-items: center;
   text-decoration: none;
   gap: 20px;
   font-weight: 600;
   font-size: 16px;
   border-radius: 0px 10px 10px 0px;
   position: relative;
   margin-right: 5px;
   width: 235px;
   height: 50px;
   color: ${(props) => (props.active ? '#1F6ED4' : '#292929')};
   background: ${(props) => props.active && '#dde9f9'};
   img {
      padding-left: 30px;
   }
`
const ItemsBorder = styled.span`
   border-left: ${({ active }) => active && '8px solid #1f6ed4'};
   width: 8px;
   height: 50px;
`

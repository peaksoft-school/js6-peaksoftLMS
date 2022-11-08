import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { SIDELAYOUT_DATA, SideData } from '../../utils/constants/constants'
import PathIcons from './PathIcons'

const SideBarHeader = () => {
   const { pathname: pathName } = useLocation()

   const ROLE = 'admin'
   const check = ROLE === 'admin' ? SIDELAYOUT_DATA : SideData

   return (
      <>
         {check.map((el) => (
            <BlockItemsEl
               to={el.path}
               key={el.id}
               active={pathName === el.path}
            >
               <ItemsBorder active={pathName === el.path} />
               <PathIcons
                  pathname={pathName === el.path}
                  array={check}
                  title={el.title}
               />
               <p>{el.title}</p>
            </BlockItemsEl>
         ))}
      </>
   )
}

export default SideBarHeader

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

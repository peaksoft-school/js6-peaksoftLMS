import React from 'react'
import styled from 'styled-components'
import headerLogo from '../../assets/headerLogo.svg'
import arrowIcon from '../../assets/arrowIcon.svg'
import { CustomLink } from './CustomLink'

const HeaderLoyout = (props) => {
   const { roles, clickHandler, links } = props

   return (
      <Header>
         <div> </div>
         <Navigation>
            {links?.map((item) => (
               <CustomLink key={item.link} to={item.path}>
                  {item.name}
               </CustomLink>
            ))}
         </Navigation>
         <NavContainer onClick={clickHandler}>
            <EllipseLogo>
               <img src={headerLogo} alt="logo" />
            </EllipseLogo>
            <ProfileBlock>
               <p>{roles}</p>
               <img src={arrowIcon} alt="logo" />
            </ProfileBlock>
         </NavContainer>
      </Header>
   )
}
export default HeaderLoyout

const Navigation = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 254px;
`
const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #eff0f4;
   width: 100%;
   height: 75px;
   border-bottom: 1px solid #c4c4c4;
`
const NavContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 160px;
   height: 46px;
   cursor: pointer;
   transition: all 0.2s;
   :hover {
      -webkit-box-shadow: inset 0px -119px 36px -78px rgba(214, 214, 214, 1);
      -moz-box-shadow: inset 0px -119px 36px -78px rgba(214, 214, 214, 1);
      box-shadow: inset 0px -119px 36px -78px rgba(214, 214, 214, 1);
      border-radius: 8px;
   }
`
const EllipseLogo = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 30px;
   height: 30px;
   border-radius: 50%;
   background-color: #d9d9d9;
`
const ProfileBlock = styled.div`
   display: flex;
   align-items: center;
   p {
      margin-right: 8px;
   }
`

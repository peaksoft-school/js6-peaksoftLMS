import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import headerLogo from '../../assets/headerLogo.svg'
import arrowIcon from '../../assets/arrowIcon.svg'

const HeaderLoyout = (props) => {
   const { roles, firstPath, secondPath, clickHandler, firstLink, secondLink } =
      props
   return (
      <Header>
         <div> </div>
         <Navigation>
            <Nav to={firstPath}>{firstLink}</Nav>
            <Nav to={secondPath}>{secondLink}</Nav>
         </Navigation>
         <NavContainer>
            <EllipseLogo>
               <img src={headerLogo} alt="logo" />
            </EllipseLogo>
            <ProfileBlock onClick={clickHandler}>
               <p>{roles}</p>
               <img src={arrowIcon} alt="logo" />
            </ProfileBlock>
         </NavContainer>
      </Header>
   )
}
export default HeaderLoyout

const Nav = styled(NavLink)`
   color: #000000;
   padding: 25px;
   font-weight: 600;
   :active {
      color: #3772ff;
      border-bottom: 4px solid #3772ff;
      border-radius: 5px 5px 0px 0px;
   }
`
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
   width: 181px;
   height: 46px;
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
   cursor: pointer;
   display: flex;
   align-items: center;
   p {
      margin-right: 8px;
   }
`

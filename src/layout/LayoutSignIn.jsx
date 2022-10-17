import React from 'react'
import styled from 'styled-components'
import LogoSignIn from '../assets/LogoSignIn.svg'

function LayoutSignIn() {
   return (
      <Wrapper>
         <WrapperLogo>
            <Logo src={LogoSignIn} />
         </WrapperLogo>
      </Wrapper>
   )
}

export default LayoutSignIn

const Wrapper = styled.div`
   width: 1440px;
   height: 1020px;
   background: #ffffff;
`
const WrapperLogo = styled.div`
   width: 665px;
   height: 1020px;
   background: #3772ff;
`
const Logo = styled.img`
   width: 264px;
   height: 462px;
   margin: 273px 201px 285px 200px;
`

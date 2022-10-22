import React from 'react'
import styled from 'styled-components'
import LogoSignIn from '../assets/LogoSignIn.svg'
import SignIn from '../components/signIn/SignIn'

function SignInPage() {
   return (
      <Wrapper>
         <WrapperLogo>
            <Logo src={LogoSignIn} />
         </WrapperLogo>
         <WrapperSignIn>
            <SignIn />
         </WrapperSignIn>
      </Wrapper>
   )
}

export default SignInPage

const WrapperSignIn = styled.div`
   margin: 200px 0 0 167px;
`
const Wrapper = styled.div`
   width: 1440px;
   background: #ffffff;
   display: flex;
`
const WrapperLogo = styled.div`
   width: 665px;
   height: 100vh;
   background: #3772ff;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Logo = styled.img`
   width: 264px;
   height: 462px;
`

import React from 'react'
import styled from 'styled-components'
import LogoSignIn from '../assets/LogoSignIn.svg'
import NewPass from '../components/signIn/NewPass'

function NewPassword() {
   return (
      <Wrapper>
         <WrapperLogo>
            <Logo src={LogoSignIn} />
         </WrapperLogo>
         <WrapperSignIn>
            <NewPass />
         </WrapperSignIn>
      </Wrapper>
   )
}

export default NewPassword

const WrapperSignIn = styled.div`
   margin: 200px 0 0 110px;
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
   /* margin: 273px 201px 285px 200px; */
`

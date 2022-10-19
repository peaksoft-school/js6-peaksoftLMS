import React from 'react'
import styled from 'styled-components'
// import LayoutSignIn from '../../layout/LayoutSignIn'
import UiIsPassword from '../UI/UiIsPasswod'
import UiInput from '../UI/UiInput'

function SignIn() {
   return (
      //   <LayoutSignIn>
      <Wrapper>
         <PeaksoftParagraph>
            Добро пожаловать в<RedLms>PEAKSOFT LMS !</RedLms>
         </PeaksoftParagraph>
         <WrapperLogin>
            <LabelLogin>
               Логин:
               <UiInput
                  margin-top="10px"
                  placeholder="Введите логин"
                  type="text"
                  width="440px"
               />
            </LabelLogin>
            <LabelPassword>
               Пароль:
               <UiIsPassword margin-top="10px" placeholder="Введите логин" />
            </LabelPassword>
         </WrapperLogin>
      </Wrapper>
      //   </LayoutSignIn>
   )
}

export default SignIn
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 440px;
   height: 100%;
   /* background-color: blue; */
`
const PeaksoftParagraph = styled.h1`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 33px;
   width: 262px;
   height: 66px;
   margin-bottom: 54px;
`
const RedLms = styled.span`
   color: red;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 33px;
   margin-left: 6px;
`
const WrapperLogin = styled.div`
   display: flex;
   flex-direction: column;
   width: 440px;
   height: 166px;
   margin-bottom: 53px;
`
const LabelLogin = styled.label`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #6a6a6a;
   display: flex;
   flex-direction: column;
   margin-bottom: 18px;
`
const LabelPassword = styled.label`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #6a6a6a;
   display: flex;
   flex-direction: column;
`

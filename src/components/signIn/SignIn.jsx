import React, { useState } from 'react'
import styled from 'styled-components'
import UiIsPassword from '../UI/UiIsPasswod'
import UiInput from '../UI/UiInput'
import UIButton from '../UI/UIButton'
import { ForgotPasswordModal } from './ForgotPasswordModal'

function SignIn() {
   const [value, setOpen] = useState(false)
   return (
      <>
         <Wrapper>
            <PeaksoftParagraph>
               Добро пожаловать в<RedLms>PEAKSOFT LMS !</RedLms>
            </PeaksoftParagraph>
            <WrapperLogin>
               <LabelLogin>
                  Логин:
                  <UiInput placeholder="Введите логин" type="text" />
               </LabelLogin>
               <LabelPassword>
                  Пароль:
                  <UiIsPassword placeholder="Введите логин" />
               </LabelPassword>
               <ForgotPass>
                  <Paragraph onClick={() => setOpen(true)}>
                     Забыли пароль?
                  </Paragraph>
               </ForgotPass>
            </WrapperLogin>
            <UIButton
               width="214px"
               height="51px"
               title="войти"
               variant="contained"
               background-color="#3772FF"
            />
         </Wrapper>
         {value && <ForgotPasswordModal open={value} />}
      </>
   )
}

export default SignIn
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 440px;
   height: 100%;
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
   margin-bottom: 28px;
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
const ForgotPass = styled.div`
   width: 100%;
   height: 100%;
   margin-top: 9px;
   display: flex;
   justify-content: end;
`
const Paragraph = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   color: #3772ff;
   cursor: pointer;
`

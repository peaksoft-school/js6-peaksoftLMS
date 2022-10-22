import React from 'react'
import styled from 'styled-components'
import UiIsPassword from '../UI/UiIsPasswod'
import UIButton from '../UI/UIButton'

function NewPass() {
   return (
      <Wrapper>
         <PeaksoftParagraph>Создать пароль</PeaksoftParagraph>
         <WrapperLogin>
            <LabelLogin>
               Новый пароль:
               <UiIsPassword placeholder="Введите новый пароль" />
            </LabelLogin>
            <LabelPassword>
               Подтверждение:
               <UiIsPassword placeholder="Подтвердите  пароль" />
            </LabelPassword>
         </WrapperLogin>
         <NewPassBtn variant="contained" background="#3772ff">
            Создать
         </NewPassBtn>
      </Wrapper>
   )
}

export default NewPass

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
   display: flex;
   align-items: center;
   justify-content: center;
`
const WrapperLogin = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 440px;
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
   div {
      margin-top: 9px;
      margin-bottom: 9px;
   }
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
   div {
      margin-top: 9px;
   }
`
const NewPassBtn = styled(UIButton)`
   width: 214px;
   height: 51px;
   border-radius: 8px;
`

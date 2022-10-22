import React from 'react'
import styled from 'styled-components'
import UIButton from '../UI/UIButton'
import UiInput from '../UI/UiInput'
import ModalWindow from '../UI/ModalWindow'

export const ForgotPasswordModal = ({ open }) => {
   return (
      <ModalWindow
         open={open}
         modalTitle="Забыли пароль?"
         headerContent={
            <LabelModal>
               Вам будет отправлена ссылка для сброса пароля
            </LabelModal>
         }
         bodyContent={
            <DivContainer>
               <InputForgot type="email" />
            </DivContainer>
         }
         footerContent={
            <DivBtn>
               <ButtonPass variant="contained" background="#3772FF">
                  Создать
               </ButtonPass>
            </DivBtn>
         }
      />
   )
}

const DivContainer = styled.div`
   margin-bottom: 20px;
   & .MuiInputBase-input {
      width: 491px;
      height: 42px;
   }
`
const DivBtn = styled.div`
   margin-bottom: 25px;
`

const LabelModal = styled.div`
   text-align: left;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   margin: 16px 12px;
   color: #87898e;
`
const ButtonPass = styled(UIButton)`
   width: 483px;
   height: 42px;
`
const InputForgot = styled(UiInput)`
   & .MuiInputBase-root {
      margin-bottom: 30px;

      & .MuiInputBase-input {
         margin-bottom: 30px;
      }
   }
`

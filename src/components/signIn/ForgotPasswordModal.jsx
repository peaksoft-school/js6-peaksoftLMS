import React from 'react'
import styled from 'styled-components'
import UIButton from '../UI/UIButton'
import UiInput from '../UI/UiInput'
import ModalWindow from '../UI/ModalWindow'

export const ForgotPasswordModal = ({ open }) => {
   return (
      <div>
         <ModalWindow
            open={open}
            modalTitle="Забыли пароль?"
            headerContent={
               <LabelModal>
                  Вам будет отправлена ссылка для сброса пароля
               </LabelModal>
            }
            bodyContent={<InputForgot type="email" />}
            footerContent={<ButtonPass title="Создать" variant="contained" />}
         />
      </div>
   )
}

const LabelModal = styled.label`
   width: 480px;
   height: 16px;
   font-family: 'Inter';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 16px;
   color: #87898e;
   width: 480px;
   height: 16px;
   margin: 16px 0 0 12px;
`
const ButtonPass = styled(UIButton)`
   margin-top: 15px;
`
const InputForgot = styled(UiInput)`
   margin: 15px;
   width: 491px;
   height: 42px;
`

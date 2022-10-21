import React, { useState } from 'react'
import styled from 'styled-components'
import ModalWindow from './components/UI/ModalWindow'
import UIButton from './components/UI/UIButton'

export const App = () => {
   const [open, setOpen] = useState(false)

   return (
      <div>
         <Div onClick={() => setOpen(true)}>
            Click
            <ModalWindow
               open={open}
               modalTitle="Забыли пароль?"
               headerContent={
                  <LabelModal>
                     Вам будет отправлена ссылка для сброса пароля
                  </LabelModal>
               }
               bodyContent="пароль"
               footerContent={<UIButton>Отправить</UIButton>}
            />
         </Div>
      </div>
   )
}

const LabelModal = styled.label``
const Div = styled.div`
   width: 50px;
   height: 25px;
   background-color: aqua;
   cursor: pointer;
`

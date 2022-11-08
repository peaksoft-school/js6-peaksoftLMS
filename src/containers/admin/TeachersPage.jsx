import styled from 'styled-components'
import React from 'react'
// import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'
import UIButton from '../../components/UI/UIButton'

export const TeachersPage = () => {
   return (
      <Div>
         <Header>header</Header>
         <ButtonWrapper>
            <UIButton variant="contained" background="#3772FF">
               + Добавить учителя
            </UIButton>
         </ButtonWrapper>
         <Wrapper width="1140px">
            asdadfgdfgdfd fdhfghfghfghfg gdfgfdgdfgdfgfsg
            {/* <UiTable actions /> */}
         </Wrapper>
      </Div>
   )
}
const ButtonWrapper = styled.div`
   display: flex;
   justify-content: end;
   margin-bottom: 20px;
`
const Header = styled.div`
   height: 75px;
   margin-bottom: 24px;
   text-align: center;
   background-color: aqua;
`
// const Button = styled(UIButton)`
//    &.MuiButtonBase-root {
//       display: flex;
//       align-items: flex-end;
//    }
// `
const Div = styled.div`
   background: #eff0f4;
   width: 1140px;
   /* height: 175px; */
   margin: 0 40px 0 260px;
`

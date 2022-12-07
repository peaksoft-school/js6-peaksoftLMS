import React, { useState } from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import RadioButton from './RadioButtton'
import basketIcon from '../../assets/basketIcon.svg'
import copyIcon from '../../assets/copyIcon.svg'
import plusIcon from '../../assets/Plus.svg'
import UiInput from './UiInput'
import UIButton from './UIButton'
import IconButton from './IconButton'

const Test = () => {
   const [state, setState] = useState([])

   function handleClick() {
      setState((prev) => [...prev, { amount: 1 }])
   }
   const removeItem = () => {
      setState()
   }
   return (
      <Container>
         <Header>Sasukeeeeeeeeeeeeeeeeeeee</Header>
         <hr />
         <Wrapper margin="24px 0px 20px 0px" width="1140px" height="124px">
            <TestName>Название теста</TestName>
            <UiInput
               margin="20px"
               width="1100px"
               placeholder="Введите название теста"
            />
         </Wrapper>
         <Wrapper padding="20px" margin="0px 0px 20px 0px " width="1140px">
            <form action="">
               <MainForm>
                  <Label htmlFor="Question">
                     <Num>1</Num>
                     <UiInput width="659px" placeholder="Вопрос" />
                  </Label>
                  <Label htmlFor="OneOption ">
                     <RadioButton
                        id="OneOption"
                        type="radio"
                        name="radio-buttons"
                     />
                     Один из списка
                  </Label>
                  <Label htmlFor="SeveralOption">
                     <RadioButton
                        id="SeveralOption"
                        type="radio"
                        name="radio-buttons"
                     />
                     Несколько из списков
                  </Label>
               </MainForm>
               {state.map((el) => {
                  return (
                     <OptionLabel key={el.amount} htmlFor="Variant">
                        <RadioButton
                           id="SeveralOption"
                           type="radio"
                           name="radioButton"
                        />
                        <UiInput width="1064px" placeholder="" />
                     </OptionLabel>
                  )
               })}

               <BottomBlock>
                  <p>
                     <ButtonAddOption onClick={() => handleClick()}>
                        Добавить вариант
                     </ButtonAddOption>
                     или
                     <ButtonAddOther> добавить вариант “Другое”</ButtonAddOther>
                  </p>
                  <IconBlock>
                     <img
                        style={{ cursor: 'pointer' }}
                        src={copyIcon}
                        alt="Icon"
                     />
                     <img
                        onClick={() => removeItem()}
                        style={{ cursor: 'pointer' }}
                        src={basketIcon}
                        alt="Icon"
                     />
                  </IconBlock>
               </BottomBlock>
            </form>
         </Wrapper>
         <ContainerUIbutton>
            <UIButton variant="outlined" width="125px" height="40px">
               Сохранить
            </UIButton>
            <UIButton variant="outlined" width="103px" height="40px">
               Отмена
            </UIButton>
         </ContainerUIbutton>
         <ContainerIconButton>
            <IconButton background=" #FA2B56 ">
               <img src={plusIcon} alt="Icon" />
            </IconButton>
         </ContainerIconButton>
      </Container>
   )
}

const Header = styled.div`
   height: 75px;
`
const Container = styled.div`
   width: 1140px;
   height: 875px;
   margin: 0 auto;
   position: relative;
   background-color: #eff0f4;
`
const OptionLabel = styled.label`
   display: flex;
   align-items: center;
   margin-top: 24px;
`
const Label = styled.label`
   display: flex;
   align-items: center;
`
const MainForm = styled.div`
   display: flex;
`

const TestName = styled.h3`
   color: #1f6ed4;
   margin: 20px 0px 0px 20px;
`
const Num = styled.p`
   color: #1f6ed4;
   font-size: 20px;
   margin-right: 18px;
   margin-left: 15px;
`
const BottomBlock = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 24px 10px 0px 40px;
`
const ButtonAddOption = styled.span`
   cursor: pointer;
   margin-right: 3px;
`
const ButtonAddOther = styled.span`
   cursor: pointer;
`
const IconBlock = styled.div`
   display: flex;
   justify-content: space-between;
   float: right;
   width: 60px;
`
const ContainerUIbutton = styled.div`
   display: flex;
   flex-direction: row-reverse;
`
const ContainerIconButton = styled.div`
   position: relative;
   left: 1050px;
   top: 100px;
`
export default Test

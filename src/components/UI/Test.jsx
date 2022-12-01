import React, { useState } from 'react'
import styled from 'styled-components'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Wrapper from './Wrapper'
// import RadioButton from './RadioButtton'
import basket from '../../assets/basket.svg'
import copy from '../../assets/copy.svg'
import Plus from '../../assets/Plus.svg'
import UiInput from './UiInput'
import UIButton from './UIButton'
import IconButton from './IconButton'

const Test = () => {
   const [get, setGet] = React.useState()

   const handleChange = (event) => {
      setGet(event.target.value)
   }
   const [state, setState] = useState([])
   const [newTest, setNewTest] = useState([])
   function handleClick() {
      setState((prev) => [...prev, { id: Math.random() }])
   }
   const newTestHandler = () => {
      setNewTest([...newTest, { amount: Math.random() }])
   }
   const removeItem = () => {
      setState()
   }
   return (
      <Container>
         <Header>HEADER{get}</Header>
         <form>
            <Wrapper margin="24px 0px 20px 0px" width="1140px" height="124px">
               <TestName>Название теста</TestName>
               <UiInput
                  margin="20px"
                  width="1100px"
                  placeholder="Введите название теста"
               />
            </Wrapper>
            {newTest.map((e, i) => {
               return (
                  <Wrapper
                     key={e.amount + 1}
                     padding="20px"
                     margin="0px 0px 20px 0px "
                     width="1140px"
                  >
                     <MainForm>
                        <Label htmlFor="Question">
                           <Num>{i + 1}</Num>
                           <UiInput
                              marginright="10px"
                              width="659px"
                              placeholder="Вопрос"
                           />
                        </Label>
                        <FormControl>
                           <RadioGroup
                              name="controlled-radio-buttons-group"
                              value={get}
                              onChange={handleChange}
                           >
                              <Label>
                                 <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Один из списка"
                                 />
                                 <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Несколько из списков "
                                 />
                              </Label>
                           </RadioGroup>
                        </FormControl>
                     </MainForm>
                     {state.map((el) => {
                        return (
                           <OptionLabel key={el.id + 1} htmlFor="Variant">
                              <FormControl>
                                 <RadioGroup
                                    name="controlled-radio-buttons-group"
                                    value={get}
                                    onChange={handleChange}
                                 >
                                    <FormControlLabel
                                       value="dasd"
                                       control={<Radio />}
                                    />
                                 </RadioGroup>
                              </FormControl>
                              <UiInput width="1064px" placeholder="Вариант" />
                           </OptionLabel>
                        )
                     })}
                     <BottomBlock>
                        <p>
                           <ButtonAddOption onClick={() => handleClick()}>
                              Добавить вариант
                           </ButtonAddOption>
                           или
                           <ButtonAddOther>
                              добавить вариант “Другое”
                           </ButtonAddOther>
                        </p>
                        <IconBlock>
                           <img
                              style={{ cursor: 'pointer' }}
                              src={copy}
                              alt="Icon"
                           />
                           <img
                              onClick={() => removeItem()}
                              style={{ cursor: 'pointer' }}
                              src={basket}
                              alt="Icon"
                           />
                        </IconBlock>
                     </BottomBlock>
                  </Wrapper>
               )
            })}
            <ContainerUIbutton>
               <SaveButton variant="contained" width="125px" height="40px">
                  Сохранить
               </SaveButton>
               <UIButton variant="outlined" width="103px" height="40px">
                  Отмена
               </UIButton>
            </ContainerUIbutton>
         </form>
         <ContainerIconButton>
            <IconButton onclick={() => newTestHandler()} background=" #FA2B56 ">
               <img src={Plus} alt="Icon" />
            </IconButton>
         </ContainerIconButton>
      </Container>
   )
}

export default Test

const Header = styled.div`
   height: 75px;
   background-color: #16ec56;
   text-align: center;
`
const Container = styled.div`
   margin: 0 30px 0 20px;
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
   margin-right: 10px;
`
const ContainerIconButton = styled.div`
   float: right;
   margin: 160px 31px 0 0;
`
const SaveButton = styled(UIButton)`
   &.cglbNa.MuiButtonBase-root {
      margin-left: 10px;
   }
`

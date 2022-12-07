/* eslint-disable no-unused-vars */
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
import Checkbox from './CheckBox'

const Test = () => {
   const [get, setGet] = React.useState()
   const [getRadio, setGetRadio] = useState()
   const [newTest, setNewTest] = useState([])
   const getVariantHandler = (event) => {
      setGetRadio(event.target.value)
   }
   const getOneOrMoreHandler = (event) => {
      setGet(event.target.value)
   }
   const newTestHandler = () => {
      setNewTest([...newTest, { amount: Math.random().toString(), data: [] }])
   }
   const addVariantHandler = (i) => {
      const changeTest = [...newTest]
      changeTest[i].data = [
         ...changeTest[i].data,
         { id: Math.random().toString() },
      ]
      setNewTest(changeTest)

      // вариант 1
      // setNewTest([
      //    ...newTest,
      //    { data: newSubtask.data.push({ id: Math.random() }) },
      // ])
      // вариант 2
      // setNewTest([
      //    ...newTest,
      //    ...newSubtask[i].data.push({ id: Math.random() }),
      // ])
      // вариант 3
      // setNewTest([
      //    ...newTest,
      //    {newTest[i].data.push({ id: Math.random() }) },
      // ])
   }

   return (
      <Container>
         <Header>
            {getRadio}HEADER{get}
         </Header>
         <form>
            <Wrapper margin="24px 0px 20px 0px" width="1140px" height="124px">
               <TestName>Название теста</TestName>
               <UiInput
                  margin="20px"
                  width="1100px"
                  placeholder="Введите название теста"
               />
            </Wrapper>
            {newTest?.map((question, index) => {
               return (
                  <Wrapper
                     key={question.amount}
                     padding="20px"
                     margin="0px 0px 20px 0px "
                     width="1140px"
                  >
                     <MainForm>
                        <Label htmlFor="Question">
                           <Num>{index + 1}</Num>
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
                           >
                              <Label>
                                 <FormControlLabel
                                    key={question.amount}
                                    value="one"
                                    onChange={getOneOrMoreHandler}
                                    control={<Radio />}
                                    label="Один из списка"
                                 />
                                 <FormControlLabel
                                    key={question.amount}
                                    value="more"
                                    onChange={getOneOrMoreHandler}
                                    control={<Radio />}
                                    label="Несколько из списков "
                                 />
                              </Label>
                           </RadioGroup>
                        </FormControl>
                     </MainForm>
                     {question.data?.map((variant) => {
                        return get === 'one' ? (
                           <OptionLabel key={variant.id} htmlFor="Variant">
                              {/* <FormControl>
                                 <RadioGroup
                                    name="controlled-radio-buttons-group"
                                    value={getRadio}
                                    onChange={getVariantHandler}
                                 >
                                    <FormControlLabel
                                       value="dasd"
                                       control={<Radio />}
                                    />
                                 </RadioGroup>
                              </FormControl> */}
                              <TestRadio
                                 name="contact"
                                 type="radio"
                                 id={variant.id}
                                 value={variant.id}
                                 onChange={getVariantHandler}
                              />
                              <UiInput width="1064px" placeholder="Вариант" />
                           </OptionLabel>
                        ) : (
                           <OptionLabel key={variant.id} htmlFor="Variant">
                              <Checkbox
                                 value={variant.id}
                                 setIsClicked={getVariantHandler}
                              />
                              <UiInput width="1064px" placeholder="Вариант" />
                           </OptionLabel>
                        )
                     })}

                     <BottomBlock>
                        <p>
                           <ButtonAddOption
                              onClick={() => addVariantHandler(index)}
                           >
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
   color: #7a7a7a;
`
const ButtonAddOther = styled.span`
   cursor: pointer;
   color: #0680e4;
   margin-left: 5px;
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
   &.jvAZlq.MuiButtonBase-root {
      margin-left: 10px;
   }
`
const TestRadio = styled.input`
   width: 20px;
   height: 20px;
   margin-right: 15px;
   margin-left: 9px;
`

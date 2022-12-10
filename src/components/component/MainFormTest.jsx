import React, { useState } from 'react'
import styled from 'styled-components'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Checkbox from '../UI/CheckBox'
import { ReactComponent as XIcon } from '../../assets/xIcon.svg'
import UiInput from '../UI/UiInput'

const MainFormTest = ({
   index,
   question,
   deleteVariantHandler,
   // drugoe,
   // deleteVariantDrugoeHandler,
}) => {
   const [getOneMore, setGetOneMore] = React.useState()
   const [getRadio, setGetRadio] = useState()

   const getVariantHandler = (event) => {
      setGetRadio(event.target.value)
   }
   const getOneOrMoreHandler = (event) => {
      setGetOneMore(event.target.value)
   }

   return (
      <>
         <MainForm>
            <Label id="demo-controlled-radio-buttons-group" htmlFor="my-input">
               <Num>{index + 1}</Num>
               <UiInput marginright="10px" width="659px" placeholder="Вопрос" />
            </Label>
            <FormControl>
               <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={getOneMore}
                  onChange={getOneOrMoreHandler}
               >
                  <Label id="controlled-radio-buttons-group" htmlFor="my-input">
                     <FormControlLabel
                        key={question.id}
                        id={question.id}
                        value={question.id}
                        control={<Radio />}
                        label="Один из списка"
                     />
                     <FormControlLabel
                        key={question.id}
                        id={index + 1}
                        value={index + 1}
                        control={<Radio />}
                        label="Несколько из списков"
                     />
                  </Label>
               </RadioGroup>
            </FormControl>
         </MainForm>
         {question.data?.map((variant) => {
            return (
               <>
                  {getOneMore === question.id ? (
                     <OptionLabel key={variant.id} htmlFor="Variant">
                        <RadioVariant>
                           <RadioGroup
                              name="controlled-radio-buttons-group"
                              value={getRadio}
                              onChange={getVariantHandler}
                           >
                              <FormControlLabel
                                 key={question.id}
                                 id={question.id}
                                 value={question.id}
                                 control={<Radio />}
                              />
                           </RadioGroup>
                        </RadioVariant>
                        {/* <TestRadio
                     name="contact"
                     type="radio"
                     id={i + 1}
                     value={variant.id}
                     onChange={getVariantHandler}
                  /> */}
                        <UiInput
                           id="Variant"
                           width="1064px"
                           placeholder={`Вариант${index + 1}`}
                        />
                        <IconX
                           onClick={() => deleteVariantHandler(variant.id)}
                        />
                     </OptionLabel>
                  ) : (
                     <OptionLabel key={variant.id} htmlFor="Variant">
                        <Checkbox
                           key={variant.id}
                           id={index + 1}
                           value={index + 1}
                           setIsClicked={getVariantHandler}
                        />
                        <UiInput
                           id="Variant"
                           width="1064px"
                           placeholder={`Вариант ${index}`}
                        />
                        <IconX
                           onClick={() => deleteVariantHandler(variant.id)}
                        />
                     </OptionLabel>
                  )}
                  {/* {!drugoe && (
                     <OptionLabel key={variant.id} htmlFor="Variant">
                        <UiInput
                           id="Variant"
                           width="1064px"
                           placeholder="Вариант другой"
                        />
                        <IconX
                           onClick={() => deleteVariantDrugoeHandler(i + 1)}
                        />
                     </OptionLabel>
                  )} */}
               </>
            )
         })}
      </>
   )
}

export default MainFormTest

const RadioVariant = styled(Radio)`
   margin-left: 5px;
`
const Num = styled.p`
   color: #1f6ed4;
   font-size: 20px;
   margin-right: 18px;
   margin-left: 15px;
`

const IconX = styled(XIcon)`
   position: relative;
   margin-right: 10px;
   cursor: pointer;
   :hover {
      background-color: #e6e3e3;
      border-radius: 4px;
   }
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

import React, { useState } from 'react'
import styled from 'styled-components'
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { ReactComponent as XIcon } from '../../assets/xIcon.svg'
import Checkbox from '../UI/CheckBox'
import UiInput from '../UI/UiInput'

const MainFormTest = ({
   index,
   question,
   deleteVariantHandler,
   // drugoe,
   // deleteVariantDrugoeHandler,
}) => {
   const [getOneMore, setGetOneMore] = React.useState('Один из списка')
   const [getRadio, setGetRadio] = useState(null)

   const getVariantHandler = (event) => {
      console.log(event.target.value)
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
                     {console.log(question.id)}
                     <FormControlLabel
                        key={question.id}
                        value="Один из списка"
                        control={<Radio />}
                        label="Один из списка"
                     />
                     <FormControlLabel
                        key={question.id + 1}
                        value="Несколько из списков"
                        control={<Radio />}
                        label="Несколько из списков"
                     />
                  </Label>
               </RadioGroup>
            </FormControl>
         </MainForm>
         <FormControl>
            <RadioGroup
               aria-labelledby="demo-controlled-radio-buttons-group"
               name="controlled-radio-buttons-group"
               value={getRadio}
               onChange={getVariantHandler}
            >
               {question.data?.map((variant, i) => {
                  return (
                     <>
                        {getOneMore === 'Один из списка' ? (
                           <OptionLabel key={variant.id}>
                              <RadioVariant key={variant.id + 7}>
                                 {console.log('variant', getRadio)}
                                 <FormControlLabel
                                    key={variant.id + 2}
                                    value={i + 2}
                                    name={`variant ${question.id}`}
                                    control={<Radio />}
                                 />
                              </RadioVariant>
                              {/* <TestRadio
                     name="contact"
                     type="radio"
                     id={i + 1}
                     value={variant.id}
                     onChange={getVariantHandler}
                  /> */}
                              <UiInput
                                 key={variant.id + 3}
                                 // id={variant.id}
                                 width="1064px"
                                 placeholder={`Вариант ${i + 1}`}
                              />
                              <IconX
                                 key={variant.id + 6}
                                 onClick={() =>
                                    deleteVariantHandler(variant.id)
                                 }
                              />
                           </OptionLabel>
                        ) : (
                           <OptionLabel key={variant.id + 4} htmlFor="Variant">
                              <Checkbox
                                 key={variant.id + 5}
                                 value={i + 3}
                                 setIsClicked={getVariantHandler}
                              />
                              <UiInput
                                 key={variant.id + 6}
                                 // id={variant.id}
                                 width="1064px"
                                 placeholder={`Вариант ${i + 1}`}
                              />
                              <IconX
                                 key={variant.id + 8}
                                 onClick={() =>
                                    deleteVariantHandler(variant.id)
                                 }
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
            </RadioGroup>
         </FormControl>
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

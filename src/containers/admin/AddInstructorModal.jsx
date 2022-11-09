import React from 'react'
import styled from 'styled-components'
import { useForm, Controller, useFormState } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'
import UIButton from '../../components/UI/UIButton'
import UiInput from '../../components/UI/UiInput'
import ModalWindow from '../../components/UI/ModalWindow'
import { forgotPassword } from '../../api/services/forgotPasswordService'

const AddInstructorModal = ({ open, handleClose }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { control, handleSubmit, reset } = useForm({
      mode: 'onblur',
      defaultValues: {
         name: '',
         surname: '',
         phone: '',
         email: '',
         password: '',
         work: '',
      },
   })
   const { errors } = useFormState({
      control,
   })
   const onSubmit = (data) => {
      // console.log(data)
      dispatch(forgotPassword({ data, navigate }))
         .then(unwrapResult)
         .then(() => {
            reset()
         })
   }
   return (
      <ModalWindow
         open={open}
         handleClose={handleClose}
         modalTitle="Забыли пароль?"
         bodyContent={
            <DivContainer>
               <Controller
                  control={control}
                  name="name"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                  }}
                  render={({ field }) => (
                     <UiInput
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="text"
                        error={!!errors.name?.message}
                     />
                  )}
               />
               {errors?.name && (
                  <ErrorMessage>
                     {errors?.name?.message || 'Error'}
                  </ErrorMessage>
               )}
               <Controller
                  control={control}
                  name="surname"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                  }}
                  render={({ field }) => (
                     <UiInput
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="text"
                        error={!!errors.surname?.message}
                     />
                  )}
               />
               {errors?.surname && (
                  <ErrorMessage>
                     {errors?.surname?.message || 'Error'}
                  </ErrorMessage>
               )}
               <Controller
                  control={control}
                  name="phone"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                  }}
                  render={({ field }) => (
                     <UiInput
                        autocomplete="off"
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="number"
                        error={!!errors.phone?.message}
                     />
                  )}
               />
               {errors?.phone && (
                  <ErrorMessage>
                     {errors?.phone?.message || 'Error'}
                  </ErrorMessage>
               )}
               <Controller
                  control={control}
                  name="email"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Адрес электронной почты введен не верно',
                     },
                     minLength: {
                        value: 6,
                        message: 'Минимум 6 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="email"
                        error={!!errors.email?.message}
                     />
                  )}
               />
               {errors?.email && (
                  <ErrorMessage>
                     {errors?.email?.message || 'Error'}
                  </ErrorMessage>
               )}
            </DivContainer>
         }
         footerContent={
            <DivBtn>
               <ButtonPass
                  onClick={handleSubmit(onSubmit)}
                  variant="contained"
                  background="#3772FF"
               >
                  Создать
               </ButtonPass>
            </DivBtn>
         }
      />
   )
}
export default AddInstructorModal
const DivContainer = styled.div`
   width: 100%;
   margin-bottom: 20px;
   & .MuiInputBase-input {
      width: 491px;
      height: 42px;
   }
`
const DivBtn = styled.div`
   margin-bottom: 25px;
`
const ButtonPass = styled(UIButton)`
   width: 483px;
   height: 42px;
`
const ErrorMessage = styled.p`
   color: red;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   margin-top: 5px;
   font-size: 13px;
   line-height: 16px;
`

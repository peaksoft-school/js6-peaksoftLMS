import React from 'react'
import styled from 'styled-components'
import { useForm, Controller, useFormState } from 'react-hook-form'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'
import { addTeacher } from '../../store/slices/admin-slices/teacher-slices/addTeacherSlice'
import UIButton from '../../components/UI/UIButton'
import UiInput from '../../components/UI/UiInput'
import ModalWindow from '../../components/UI/ModalWindow'

const AddInstructorModal = ({ open, handleClose }) => {
   const dispatch = useDispatch()
   // const navigate = useNavigate()
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
      console.log(data)
      dispatch(addTeacher(data))
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
                     minLength: {
                        value: 3,
                        message: 'Минимум 3 символов и не должень быть число',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margin="16px 0 0 0"
                        placeholder="Имя"
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
                     minLength: {
                        value: 3,
                        message: 'Минимум 3 символов и не должень быть число',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margin="12px 0 0 0"
                        placeholder="Фамилия"
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
                        margin="12px 0 0 0"
                        placeholder="+996 ___ __ __ __"
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
                        margin="12px"
                        placeholder="Email"
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
               <Controller
                  control={control}
                  name="password"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
                     },
                     minLength: {
                        value: 6,
                        message:
                           'Минимум 6 символов и должен содержать хотя бы одно число ',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margin="12px 0 0 0"
                        placeholder="Пароль"
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="password"
                        error={!!errors.password?.message}
                     />
                  )}
               />
               {errors?.password && (
                  <ErrorMessage>{errors?.password?.message}</ErrorMessage>
               )}
               <Controller
                  control={control}
                  name="work"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 3,
                        message: 'Минимум 3 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margin="12px 0 0 0"
                        placeholder="Специализация"
                        onChange={(e) => field.onChange(e)}
                        onBlur={(e) => field.onBlur(e)}
                        value={field.value}
                        type="text"
                        error={!!errors.work?.message}
                     />
                  )}
               />
               {errors?.work && (
                  <ErrorMessage>
                     {errors?.work?.message || 'Error'}
                  </ErrorMessage>
               )}
            </DivContainer>
         }
         footerContent={
            <DivBtn>
               <ButtonAddTeacher onClick={handleClose} variant="outlined">
                  Отмена
               </ButtonAddTeacher>
               <ButtonAddTeacher
                  onClick={handleSubmit(onSubmit)}
                  variant="contained"
                  background="#3772FF"
               >
                  Создать
               </ButtonAddTeacher>
            </DivBtn>
         }
      />
   )
}
export default AddInstructorModal
const DivContainer = styled.div`
   width: 100%;
   margin-bottom: 20px;
   /* &.css-1u3bzj6-MuiFormControl-root-MuiTextField-root {
      margin-top: 15px;
   } */
   & .MuiInputBase-input {
      width: 491px;
      height: 42px;
   }
`
const DivBtn = styled.div`
   margin-bottom: 15px;
   width: 491px;
   display: flex;
   justify-content: end;
   margin-left: 35px;
`
const ButtonAddTeacher = styled(UIButton)`
   width: 117px;
   &.gPSgfD.MuiButtonBase-root {
      margin-left: 10px;
   }
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

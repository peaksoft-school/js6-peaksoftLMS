import styled from 'styled-components'
import { useForm, Controller, useFormState } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { unwrapResult } from '@reduxjs/toolkit'
import { useSearchParams } from 'react-router-dom'
import {
   editTeacher,
   //    addTeacher,
   getTeacherById,
} from '../../store/slices/admin-slices/teacher-slices/teacherActions'
import UIButton from '../UI/UIButton'
import UiInput from '../UI/UiInput'
import ModalWindow from '../UI/ModalWindow'

const RenameInstructorModal = ({ open, handleClose }) => {
   // const renameSelect = useSelector((state) => state.addTeacher.rename)
   // console.log(renameSelect)
   const dispatch = useDispatch()
   const [groupData, setGroupData] = useState({
      fullName: '',
      specialization: '',
      phoneNumber: '',
      email: '',
   })
   const [params] = useSearchParams()
   const { id } = Object.fromEntries(params)
   const { control, handleSubmit } = useForm({
      mode: 'onblur',
      defaultValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
         specialization: '',
      },
   })
   const { errors } = useFormState({
      control,
   })

   const editGroupHadler = () => {
      dispatch(
         editTeacher({
            id,
            body: {
               fullName: groupData.fullName,
               specialization: groupData.specialization,
               phoneNumber: groupData.phoneNumber,
               email: groupData.email,
            },
         })
      )
      handleClose()
   }

   useEffect(() => {
      dispatch(getTeacherById(id))
         .unwrap()
         .then((result) => {
            setGroupData({
               ...groupData,
               fullName: result.fullName,
               specialization: result.specialization,
               phoneNumber: result.phoneNumber,
               email: result.email,
            })
         })
   }, [])

   return (
      <ModalWindow
         open={open}
         handleClose={handleClose}
         modalTitle="Изменить учителя"
         bodyContent={
            <DivContainer onSubmit={handleSubmit(editGroupHadler)}>
               <Controller
                  control={control}
                  name="firstName"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 3,
                        message: 'Минимум 3 символов и не должень быть число',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="16px"
                        placeholder="Имя"
                        onChange={(e) =>
                           field.setGroupData({
                              ...groupData,
                              fullName: e.target.value,
                           })
                        }
                        value={field.groupData.fullName}
                        type="text"
                        error={!!errors.firstName?.message}
                     />
                  )}
               />
               {errors?.firstName && (
                  <ErrorMessage>
                     {errors?.firstName?.message || 'Error'}
                  </ErrorMessage>
               )}
               <Controller
                  control={control}
                  name="phoneNumber"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="12px"
                        placeholder="+996 ___ __ __ __"
                        onChange={(e) =>
                           field.setGroupData({
                              ...groupData,
                              phoneNumber: e.target.value,
                           })
                        }
                        value={field.groupData.phoneNumber}
                        type="number"
                        error={!!errors.phoneNumber?.message}
                     />
                  )}
               />
               {errors?.phoneNumber && (
                  <ErrorMessage>
                     {errors?.phoneNumber?.message || 'Error'}
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
                        margintop="12px"
                        placeholder="Email"
                        onChange={(e) =>
                           field.setGroupData({
                              ...groupData,
                              email: e.target.value,
                           })
                        }
                        value={field.groupData.email}
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
                  name="specialization"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 3,
                        message: 'Минимум 3 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="12px"
                        placeholder="Специализация"
                        onChange={(e) =>
                           field.setGroupData({
                              ...groupData,
                              specialization: e.target.value,
                           })
                        }
                        value={field.groupData.specialization}
                        type="text"
                        error={!!errors.specialization?.message}
                     />
                  )}
               />
               {errors?.specialization && (
                  <ErrorMessage>
                     {errors?.specialization?.message || 'Error'}
                  </ErrorMessage>
               )}
               <DivBtn>
                  <ButtonCloseTeacher onClick={handleClose} variant="outlined">
                     Отмена
                  </ButtonCloseTeacher>
                  <ButtonAddTeacher
                     type="submit"
                     variant="contained"
                     background="#3772FF"
                  >
                     Создать
                  </ButtonAddTeacher>
               </DivBtn>
            </DivContainer>
         }
      />
   )
}
export default RenameInstructorModal
const DivContainer = styled.form`
   width: 100%;
   margin-bottom: 20px;
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
   margin-top: 20px;
`
const ButtonAddTeacher = styled(UIButton)`
   width: 117px;
   &.gPSgfD.MuiButtonBase-root {
      margin-left: 10px;
   }
`
const ButtonCloseTeacher = styled(UIButton)`
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

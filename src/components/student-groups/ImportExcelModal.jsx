import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useForm, Controller, useFormState } from 'react-hook-form'
import { useState, useEffect } from 'react'
import UIButton from '../UI/UIButton'
import UiInput from '../UI/UiInput'
import ModalWindow from '../UI/ModalWindow'
import StudentSelect from '../UI/GroupsSelect'
import { getGroups } from '../../store/slices/admin-slices/group-slices/group-actions'
import { LEARNING_FORMAT } from '../../utils/constants/constants'
import { addStudents } from '../../store/slices/admin-slices/admin-student/student-actions'

const ImportExcelModal = ({ open, handleClose }) => {
   const dispatch = useDispatch()
   const { groups } = useSelector((state) => state.groups)

   const { control, handleSubmit, reset } = useForm({
      mode: 'onblur',
      defaultValues: {
         firstName: '',
         lastName: '',
         phoneNumber: '',
         email: '',
         password: '',
      },
   })

   const [value, setValue] = useState({
      groupId: '',
      groupName: '',
      studyFormat: '',
   })

   const getOptionValue = (name, id) => {
      setValue({ ...value, groupId: id })
   }

   const getValueSelect = (grName) => {
      setValue({ ...value, groupName: grName })
   }

   const getValueSelectFormatLearning = (format) => {
      setValue({ ...value, studyFormat: format })
   }

   const { errors } = useFormState({
      control,
   })

   useEffect(() => {
      dispatch(getGroups())
   }, [])

   const onSubmit = ({ email, firstName, lastName, phoneNumber, password }) => {
      dispatch(
         addStudents({
            firstName,
            lastName,
            phoneNumber,
            email,
            password,
            groupId: value.groupId,
            studyFormat: value.studyFormat,
         })
      )
      handleClose()
      reset()
   }
   return (
      <ModalWindow
         open={open}
         handleClose={handleClose}
         modalTitle="Добавить студента"
         bodyContent={
            <DivContainer onSubmit={handleSubmit(onSubmit)}>
               <Controller
                  control={control}
                  name="firstName"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 3,
                        message: 'Введите не менее 3 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="16px"
                        placeholder="Имя"
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
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
                  name="lastName"
                  rules={{
                     required: 'Поле обязательно к заполнению',
                     minLength: {
                        value: 4,
                        message: 'Введите не менее 4 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="12px"
                        placeholder="Фамилия"
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        type="text"
                        error={!!errors.lastName?.message}
                     />
                  )}
               />
               {errors?.lastName && (
                  <ErrorMessage>
                     {errors?.lastName?.message || 'Error'}
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
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
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
                        message: 'Введите более 6 символов',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="12px"
                        placeholder="Email"
                        onChange={(e) => field.onChange(e)}
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
                     minLength: {
                        value: 6,
                        message: 'Введите не менее 6 символовн',
                     },
                  }}
                  render={({ field }) => (
                     <UiInput
                        margintop="12px"
                        placeholder="Пароль"
                        onChange={(e) => field.onChange(e)}
                        value={field.value}
                        type="password"
                        error={!!errors.password?.message}
                     />
                  )}
               />
               {errors?.password && (
                  <ErrorMessage>{errors?.password?.message}</ErrorMessage>
               )}
               <StudentSelect
                  placeholder="Группа"
                  value={value.groupName}
                  setValue={getValueSelect}
                  options={groups}
                  getOptionValue={getOptionValue}
               />
               <StudentSelect
                  placeholder="Формат обучения"
                  value={value.studyFormat}
                  setValue={getValueSelectFormatLearning}
                  options={LEARNING_FORMAT}
                  getOptionValue={getOptionValue}
               />

               <ContaiberButton>
                  <UIButton
                     onClick={handleClose}
                     variant="outlined"
                     width="103px"
                     borderradius="8px"
                  >
                     Отмена
                  </UIButton>
                  <UIButton
                     type="submit"
                     variant="contained"
                     background="#3772FF"
                     width="117px"
                     borderradius="8px"
                  >
                     Добавить
                  </UIButton>
               </ContaiberButton>
            </DivContainer>
         }
      />
   )
}
export default ImportExcelModal

const DivContainer = styled.form`
   margin-bottom: 20px;
   .MuiOutlinedInput-root {
      width: 491px;
      height: 42px;
      padding-top: 2px;
   }
   :first-child {
      margin-top: 16px;
   }
   div {
      padding-top: 12px;
   }
   .MuiSelect-select {
      width: 491px;
      height: 42px;
      div {
         display: flex;
         justify-content: flex-start;
         margin-bottom: 5px;
      }
   }
`
const ContaiberButton = styled.div`
   margin-bottom: 15px;
   margin-left: 35px;
   margin-top: 8px;
   width: 491px;
   gap: 10px;
   display: flex;
   justify-content: end;
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

import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
// import { useForm, Controller, useFormState } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import { unwrapResult } from '@reduxjs/toolkit'
import {
   editTeacher,
   //    addTeacher,
   // getTeacherById,
   renameTeacher,
} from '../../store/slices/admin-slices/teacher-slices/teacherActions'
import UIButton from '../UI/UIButton'
import UiInput from '../UI/UiInput'
import ModalWindow from '../UI/ModalWindow'
import PopUp from '../UI/PopUp'

const RenameInstructorModal = ({ open, handleClose }) => {
   // const renameSelect = useSelector((state) => state.addTeacher.rename)
   // console.log(renameSelect)
   const dispatch = useDispatch()
   const [validateError, setValidateError] = useState(false)
   const [groupData, setGroupData] = useState({
      fullName: '',
      phoneNumber: '',
      specialization: '',
      email: '',
   })
   const [params] = useSearchParams()
   const { itemId } = Object.fromEntries(params)
   console.log(itemId)

   // eslint-disable-next-line consistent-return
   const editGroupHandler = (e, id) => {
      e.preventDefault()
      if (
         !groupData.fullName &&
         !groupData.phoneNumber &&
         !groupData.specialization &&
         !groupData.email
      )
         return setValidateError(true)
      dispatch(
         editTeacher({
            id,
            body: {
               fullName: groupData.fullName,
               phoneNumber: groupData.phoneNumber,
               specialization: groupData.specialization,
               email: groupData.email,
            },
         })
      )
      handleClose()
   }

   useEffect(() => {
      dispatch(renameTeacher(itemId))
         .unwrap()
         .then((result) => {
            console.log(result, 'ressssult')
            setGroupData({
               ...groupData,
               fullName: result.fullName,
               phoneNumber: result.specialization,
               specialization: result.phoneNumber,
               email: result.email,
            })
         })
   }, [])
   return (
      <>
         {validateError && (
            <PopUp messageType="error" message="Произошла ошибка" />
         )}
         <ModalWindow
            open={open}
            handleClose={handleClose}
            modalTitle="Изменить учителя"
            bodyContent={
               <DivContainer onSubmit={editGroupHandler}>
                  {validateError && (
                     <ErrorMessage>
                        Все поля обязательны к заполнению
                     </ErrorMessage>
                  )}
                  <UiInput
                     margintop="16px"
                     placeholder="Имя"
                     onChange={(e) =>
                        setGroupData({
                           ...groupData,
                           fullName: e.target.value,
                        })
                     }
                     value={groupData.fullName}
                     type="text"
                  />

                  <UiInput
                     margintop="12px"
                     placeholder="+996 ___ __ __ __"
                     onChange={(e) =>
                        setGroupData({
                           ...groupData,
                           phoneNumber: e.target.value,
                        })
                     }
                     value={groupData.phoneNumber}
                     type="text"
                  />
                  <UiInput
                     margintop="12px"
                     placeholder="Специализация"
                     onChange={(e) =>
                        setGroupData({
                           ...groupData,
                           specialization: e.target.value,
                        })
                     }
                     value={groupData.specialization}
                     type="text"
                  />
                  <UiInput
                     margintop="12px"
                     placeholder="Email"
                     onChange={(e) =>
                        setGroupData({
                           ...groupData,
                           email: e.target.value,
                        })
                     }
                     value={groupData.email}
                     type="email"
                  />
                  <DivBtn>
                     <ButtonCloseTeacher
                        onClick={handleClose}
                        variant="outlined"
                     >
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
      </>
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
   /* margin-top: 5px; */
   font-size: 15px;
   line-height: 16px;
`

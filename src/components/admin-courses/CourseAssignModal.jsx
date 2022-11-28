import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import {
   assignCourseinstructor,
   getAllTeacher,
} from '../../store/slices/admin-slices/courses-slices/courses-actions'
import ModalWindow from '../UI/ModalWindow'
import { TeacherSelect } from '../UI/TeacherSelect'
import UIButton from '../UI/UIButton'
import DeleteX from '../../assets/removeX.svg'

const CourseAssignModal = ({ open, onClose }) => {
   const dispatch = useDispatch()
   const { teachers } = useSelector((state) => state.courses)
   const [personName, setPersonName] = useState([])
   const [nameID, setNameID] = useState(null)

   const [params] = useSearchParams()
   const { id } = Object.fromEntries(params)

   useEffect(() => {
      dispatch(getAllTeacher())
   }, [])

   // const newData = (data) => {
   //    console.log(data, 'datataata')
   //    setNameID(data)
   // }
   const assignHandler = () => {
      dispatch(assignCourseinstructor({ instructorId: nameID, courseId: id }))
   }

   return (
      <ModalWindow
         open={open}
         handleClose={() => onClose()}
         modalTitle="Назначить учителя"
         headerContent={
            <NameBlock>
               <NameInstructor>
                  {personName.map((el) => (
                     <Text>
                        {el} <img src={DeleteX} alt="icons" />
                     </Text>
                  ))}
               </NameInstructor>
            </NameBlock>
         }
         bodyContent={
            <ModalFormBLock>
               <TeacherSelect
                  data={teachers}
                  personName={personName}
                  setPersonName={setPersonName}
                  getIdHandler={setNameID}
                  pleceholder="Выбрать учителя"
               />
            </ModalFormBLock>
         }
         footerContent={
            <FooterBlock>
               <UIButton
                  borderradius="8px"
                  width="117px"
                  height="40px"
                  variant="outlined"
                  onClick={() => onClose()}
               >
                  Отмена
               </UIButton>
               <UIButton
                  borderradius="8px"
                  width="117px"
                  height="40px"
                  variant="contained"
                  onClick={assignHandler}
               >
                  Добавить
               </UIButton>
            </FooterBlock>
         }
      />
   )
}

export default CourseAssignModal
const NameInstructor = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   flex-direction: column;
`

const ModalFormBLock = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`
const NameBlock = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin: 10px;
`

// const FormInputBlock = styled.div`
//    display: flex;
//    justify-content: space-between;
//    column-gap: 12px;
//    padding: 15px 0;
// `

const FooterBlock = styled.div`
   display: flex;
   justify-content: flex-end;
   margin: 20px 25px 15px 0;
   column-gap: 10px;
`
const Text = styled.p`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 491px;
   height: 42px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
   padding: 10px 10px;
   margin-bottom: 12px;
   cursor: pointer;
`

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { Button, styled as style } from '@mui/material'
import styled from 'styled-components'
import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'
import PopUp from '../../components/UI/PopUp'
import {
   getCourseStudentsById,
   getCoursesById,
} from '../../store/slices/instructor-slices/courses/course-actions'
import { STUDENT_HEADER } from '../../utils/constants/constants'
import { UiLoading } from '../../components/UI/UiLoading'
import { NoDataInfo } from '../../components/UI/NoDataInfo'
import { AssignGroupModal } from '../../components/instructor/AssignGroupModal'
import BreadCrumbs from '../../components/UI/BreadCrambs'
import { ReactComponent as AddIcon } from '../../assets/groupAssign.svg'

export const InstructorStudents = () => {
   const dispatch = useDispatch()
   const { id } = useParams()
   const { error, status, courseStudents } = useSelector(
      (state) => state.insCourses
   )
   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)
   const [currentCourse, setCurrentCourse] = useState('')

   const INS_PATH = [
      { path: '/instructor', to: '/instructor', name: 'Kурсы' },
      {
         path: '',
         to: '',
         name: currentCourse,
      },
      {
         path: '',
         to: '',
         name: 'Студенты',
      },
   ]

   const openAssignModal = () => {
      setParams({ modalOpen: 'ASSIGN-GROUP', id })
   }
   const closeModalHandler = () => {
      setParams({})
   }

   const render = courseStudents.map((item, i) => {
      return {
         id: i + 1,
         name: item.fullName,
         format: item.studyFormat,
         group: item.groupName,
         phone: item.phoneNumber,
         email: item.email,
      }
   })

   useEffect(() => {
      dispatch(getCourseStudentsById(id))
      dispatch(getCoursesById(id))
         .unwrap()
         .then((response) => {
            setCurrentCourse(response.courseName)
         })
   }, [dispatch])

   return (
      <>
         {status === 'loading' ? (
            <UiLoading />
         ) : (
            <StudetsMain>
               {status === 'assigned' && (
                  <PopUp
                     message="Группа добавлена в курс"
                     messageType="success"
                  />
               )}
               <HeaderBlock>
                  <div>
                     <BreadCrumbs paths={INS_PATH} />
                  </div>
                  <CustomButton variant="contained" onClick={openAssignModal}>
                     <AddIcon />
                     <ButtonText> Добавить группу в курс</ButtonText>
                  </CustomButton>
               </HeaderBlock>
               {courseStudents.length === 0 ? (
                  <NoDataInfo title="В этом курсе пока нет студентов" />
               ) : (
                  <TableMain>
                     <Wrapper width="1140px" margin="24px 0" height="100vh">
                        <UiTable headData={STUDENT_HEADER} data={render} />
                     </Wrapper>
                  </TableMain>
               )}
            </StudetsMain>
         )}
         {error && <PopUp message={error} messageType="error" />}
         <AssignGroupModal
            open={modalOpen === 'ASSIGN-GROUP'}
            onClose={closeModalHandler}
         />
      </>
   )
}
const StudetsMain = styled.div`
   background-color: #eff0f4;
   width: 100%;
`
const TableMain = styled.div`
   display: flex;
   justify-content: center;
`
const HeaderBlock = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 44px;
   margin: 0 39px;
`
const CustomButton = style(Button)`
   height: 40px;
   width: 260px;
   borderradius: 8px;
`
const ButtonText = styled.p`
   font-size: 14px;
   margin-left: 8px;
`

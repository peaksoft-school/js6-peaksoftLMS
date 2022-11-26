import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'
import PopUp from '../../components/UI/PopUp'
import { getCourseStudentsById } from '../../store/slices/instructor-slices/courses/course-actions'
import { STUDENT_HEADER } from '../../utils/constants/constants'
import { UiLoading } from '../../components/UI/UiLoading'
import { NoDataInfo } from '../../components/UI/NoDataInfo'
import UIButton from '../../components/UI/UIButton'
import { AssignGroupModal } from '../../components/instructor/AssignGroupModal'
import { ReactComponent as AddIcon } from '../../assets/groupAssign.svg'

export const InstructorStudents = () => {
   const dispatch = useDispatch()
   const { id } = useParams()

   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)

   const openAssignModal = () => {
      setParams({ modalOpen: 'ASSIGN-GROUP', id })
   }
   const closeModalHandler = () => {
      setParams({})
   }

   const { error, status, courseStudents } = useSelector(
      (state) => state.insCourses
   )

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
               <BreadcrumsBlock>
                  <p>BreadCrums</p>
                  <UIButton
                     height="40px"
                     width="236px"
                     borderradius="8px"
                     variant="contained"
                     onClick={openAssignModal}
                  >
                     <AssignIcon>
                        <AddIcon />
                     </AssignIcon>
                     Добавить группу в курс
                  </UIButton>
               </BreadcrumsBlock>
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
const BreadcrumsBlock = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding-top: 44px;
   margin: 0 39px;
`
const AssignIcon = styled.p`
   margin-right: 9px;
`

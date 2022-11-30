import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'

import { InsMeatBalls } from '../../components/instructor/InsMeatBalls'
import GroupCard from '../../components/UI/GroupCard'
import { getCourses } from '../../store/slices/instructor-slices/courses/course-actions'
import { UiLoading } from '../../components/UI/UiLoading'
import { NoDataInfo } from '../../components/UI/NoDataInfo'
import { AssignGroupModal } from '../../components/instructor/AssignGroupModal'
import PopUp from '../../components/UI/PopUp'

export const InstructorMain = () => {
   const { courses, status } = useSelector((state) => state.insCourses)
   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const openAssignModal = (id) => {
      setParams({ modalOpen: 'ASSIGN-GROUP', id })
   }
   const closeModalHandler = () => {
      setParams({})
   }
   const navigateHanlder = (id) => {
      navigate(`course-students/${id}`)
   }

   useEffect(() => {
      dispatch(getCourses())
   }, [dispatch])

   return status === 'loading' ? (
      <UiLoading />
   ) : (
      <>
         <CourseMain>
            {courses.length === 0 ? (
               <NoDataInfo title="У вас пока нет курсов" />
            ) : (
               <GridCourses>
                  {status === 'assigned' && (
                     <PopUp
                        message="Группа добавлена в курс"
                        messageType="success"
                     />
                  )}
                  {courses.map((element) => (
                     <GroupCard
                        key={element.id}
                        someImage={element.image}
                        someName={element.courseName}
                        someParagraph={element.description}
                        someYear={element.dateOfStart}
                        onClick={() => navigateHanlder(element.id)}
                        someButton={
                           <InsMeatBalls
                              openAssignModal={openAssignModal}
                              id={element.id}
                           />
                        }
                     />
                  ))}
               </GridCourses>
            )}
         </CourseMain>
         <AssignGroupModal
            open={modalOpen === 'ASSIGN-GROUP'}
            onClose={closeModalHandler}
         />
         <Outlet />
      </>
   )
}

const CourseMain = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   padding: 0 40px 0 20px;
   background-color: #eff0f4;
`
const GridCourses = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   column-gap: 20px;
   row-gap: 20px;
`

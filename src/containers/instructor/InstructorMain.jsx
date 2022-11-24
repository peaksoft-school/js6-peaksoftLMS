import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { InsMeatBalls } from '../../components/instructor/InsMeatBalls'
import GroupCard from '../../components/UI/GroupCard'
import { getCourses } from '../../store/slices/instructor-slices/courses/course-actions'
import { UiLoading } from '../../components/UI/UiLoading'
import { NoDataInfo } from '../../components/UI/NoDataInfo'

export const InstructorMain = () => {
   const { courses, status } = useSelector((state) => state.insCourses)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCourses())
   }, [dispatch])

   return status === 'loading' ? (
      <UiLoading />
   ) : (
      <CourseMain>
         {courses.length === 0 ? (
            <NoDataInfo title="У вас пока нет курсов" />
         ) : (
            <GridCourses>
               {courses.map((element) => (
                  <GroupCard
                     key={element.id}
                     someImage={element.image}
                     someName={element.courseName}
                     someParagraph={element.description}
                     someYear={element.dateOfStart}
                     someButton={<InsMeatBalls />}
                  />
               ))}
            </GridCourses>
         )}
      </CourseMain>
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

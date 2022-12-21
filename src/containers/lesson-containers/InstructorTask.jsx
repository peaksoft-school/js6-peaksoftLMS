import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import BreadCrumbs from '../../components/UI/BreadCrambs'
import HeaderLayout from '../../components/UI/HeaderLoyout'
import { taskCrumbs } from '../../utils/helpers/helper'
import { getLessonTask } from '../../store/slices/instructor-slices/materials/materials-actions'
import Wrapper from '../../components/UI/Wrapper'

export const InstructorTask = () => {
   const { courseId, taskId } = useParams()
   const { courseName } = useSelector((state) => state.insCourses)
   const dispatch = useDispatch()
   const dataTask = useSelector((state) => state.materials.taskData)

   console.log(dataTask.contentResponses, 'taskData')

   useEffect(() => {
      dispatch(getLessonTask(taskId))
   }, [])

   return (
      <TaskPageMain>
         <HeaderLayout roles="Инструктор" />
         <BreadCrumbsBlock>
            <BreadCrumbs paths={taskCrumbs(courseName, 'Задание', courseId)} />
         </BreadCrumbsBlock>

         <Wrapper>
            {dataTask.contentResponses.map((item) => (
               <div key={item.id}>
                  <h2>{item.contentName}</h2>
               </div>
            ))}
         </Wrapper>
      </TaskPageMain>
   )
}

const TaskPageMain = styled.div`
   padding: 0 10px;
   background-color: #eff0f4;
   width: 100%;
   overflow: auto;
`
const BreadCrumbsBlock = styled.div`
   margin: 47px 0 24px 41px;
`

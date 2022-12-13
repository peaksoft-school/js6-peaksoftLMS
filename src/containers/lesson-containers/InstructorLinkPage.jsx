/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import BreadCrumbs from '../../components/UI/BreadCrambs'
import HeaderLayout from '../../components/UI/HeaderLoyout'
import { getLessonLink } from '../../store/slices/instructor-slices/materials/materials-actions'
import { taskCrumbs } from '../../utils/helpers/helper'

export const InstructorLinkPage = () => {
   const [linkData, setLinkData] = useState({})
   const { courseId, linkId } = useParams()
   const { courseName } = useSelector((state) => state.insCourses)

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getLessonLink(linkId))
         .unwrap()
         .then((result) => setLinkData(result))
   }, [])

   return (
      <TestPageMain>
         <HeaderLayout roles="Инструктор" />
         <BreadCrumbsBlock>
            <BreadCrumbs paths={taskCrumbs(courseName, 'Ссылка', courseId)} />
         </BreadCrumbsBlock>
         <div>
            <h2>{linkData.linkText}</h2>
            <a href={linkData.link} target="_blank">
               {linkData.link}
            </a>
         </div>
      </TestPageMain>
   )
}
const TestPageMain = styled.div`
   padding: 0 10px;
   background-color: #eff0f4;
   width: 100%;
   overflow: auto;
`
const BreadCrumbsBlock = styled.div`
   margin: 47px 0 24px 41px;
`

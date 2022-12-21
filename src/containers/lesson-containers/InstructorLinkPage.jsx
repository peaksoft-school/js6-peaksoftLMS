/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import BreadCrumbs from '../../components/UI/BreadCrambs'
import HeaderLayout from '../../components/UI/HeaderLoyout'
import { getLessonLink } from '../../store/slices/instructor-slices/materials/materials-actions'
import { taskCrumbs } from '../../utils/helpers/helper'
import Wrapper from '../../components/UI/Wrapper'

export const InstructorLinkPage = () => {
   const [linkData, setLinkData] = useState({})
   const { courseId, linkId } = useParams()
   const { courseName } = useSelector((state) => state.insCourses)

   console.log(linkId)
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
         <Wrapper width="100%" margin="20px 0" height="80%" padding="20px">
            <Title>{linkData.linkText}</Title>
            <a href={linkData.link} target="_blank">
               {linkData.link}
            </a>
         </Wrapper>
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
   margin: 34px 0 24px 35px;
`
const Title = styled.h2`
   margin-bottom: 20px;
`

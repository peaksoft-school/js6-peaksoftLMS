import React from 'react'
import styled from 'styled-components'
import lessonVideoIcon from '../../assets/LessonVideoIcon.svg'
import presentationIcon from '../../assets/PresentationIcon.svg'
import iconTask from '../../assets/IconTask.svg'
import linkIcon from '../../assets/LinkIcon.svg'
import testIcon from '../../assets/TestIcon.svg'

const LessonCard = ({ title, headerIcon, actionIcon, actionButton }) => {
   return (
      <CardBody>
         <CardHeader>
            <HeaderLeft>
               <HeaderIcon src={headerIcon} alt="icon" />
               <h2>{title}</h2>
            </HeaderLeft>
            <HeaderRight>
               {actionButton} <ActionIcon src={actionIcon} alt="icon" />
            </HeaderRight>
         </CardHeader>
         <CardMain>
            <ContentLessonCard>
               <img src={lessonVideoIcon} alt="icon" />
               <TextLesson>Видеоурок</TextLesson>
            </ContentLessonCard>

            <ContentLessonCard>
               <img src={presentationIcon} alt="icon" />
               <TextLesson>Презентация</TextLesson>
            </ContentLessonCard>

            <ContentLessonCard>
               <img src={iconTask} alt="icon" />
               <TextLesson>Задание</TextLesson>
            </ContentLessonCard>

            <ContentLessonCard>
               <img src={linkIcon} alt="icon" />
               <TextLesson>Ссылка</TextLesson>
            </ContentLessonCard>

            <ContentLessonCard>
               <img src={testIcon} alt="icon" />
               <TextLesson>Тест</TextLesson>
            </ContentLessonCard>
         </CardMain>
      </CardBody>
   )
}
export default LessonCard
const CardBody = styled.div`
   width: 560px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
`
const CardHeader = styled.div`
   justify-content: space-between;
   display: flex;
   height: 80px;
   align-items: center;
   border-bottom: 0.5px solid #bfc4ce;
`
const HeaderLeft = styled.div`
   display: flex;
   margin-left: 20px;
`
const HeaderRight = styled.div`
   display: flex;
   margin-right: 27px;
`
const CardMain = styled.div`
   margin: 17px 20px 21px 23px;
`
const ContentLessonCard = styled.div`
   display: flex;
   margin-top: 20px;
`
const TextLesson = styled.p`
   margin: 0px 0px 0px 18px;
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #000000;
`
const ActionIcon = styled.img`
   margin-left: 30px;
`
const HeaderIcon = styled.img`
   margin-right: 17px;
`

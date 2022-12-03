import React from 'react'
import styled from 'styled-components'
import lessonVideoIcon from '../../assets/LessonVideoIcon.svg'
import presentationIcon from '../../assets/PresentationIcon.svg'
import iconTask from '../../assets/IconTask.svg'
import linkIcon from '../../assets/LinkIcon.svg'
import testIcon from '../../assets/TestIcon.svg'

const LessonCard = (props) => {
   const {
      title,
      headerIcon,
      actionIcon,
      actionButton,
      deleteHandler,
      editHandler,
   } = props
   return (
      <CardMain>
         <CardHeader>
            <HeaderLeft>
               {headerIcon && (
                  <p onClick={editHandler}>
                     <HeaderIcon src={headerIcon} alt="icon" />
                  </p>
               )}

               <h2>{title}</h2>
            </HeaderLeft>
            <HeaderRight>
               {actionButton}
               {actionIcon && (
                  <p onClick={deleteHandler}>
                     <ActionIcon src={actionIcon} alt="icon" />
                  </p>
               )}
            </HeaderRight>
         </CardHeader>
         <CardBody>
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
         </CardBody>
      </CardMain>
   )
}
export default LessonCard

const CardMain = styled.div`
   width: 560px;
   border: 1px solid #d4d4d4;
   border-radius: 10px;
   background-color: #fff;
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
   align-items: center;
   margin-left: 20px;
`
const HeaderRight = styled.div`
   display: flex;
   align-items: center;
   margin-right: 27px;
`
const CardBody = styled.div``

const ContentLessonCard = styled.div`
   display: flex;
   padding: 10px 22px;
   margin-top: 5px;
   cursor: pointer;
   transition: all 0.2s;
   :hover {
      background: rgba(26, 35, 126, 0.07);
   }
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
   cursor: pointer;
`
const HeaderIcon = styled.img`
   margin-right: 17px;
   cursor: pointer;
`

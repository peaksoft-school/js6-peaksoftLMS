import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { Button, styled as style } from '@mui/material'
import BreadCrumbs from '../../components/UI/BreadCrambs'
import HeaderLoyout from '../../components/UI/HeaderLoyout'
import { getCoursesById } from '../../store/slices/instructor-slices/courses/course-actions'
import {
   deleteLesson,
   getCoursesLessons,
} from '../../store/slices/instructor-slices/materials/materials-actions'
import { courseCrumbs, courseLinks } from '../../utils/helpers/helper'
import EditLesson from '../../assets/editLesson.svg'
import DeleteLesson from '../../assets/deleteLesson.svg'
import LessonCard from '../../components/UI/LessonCard'
import { ActionSelect } from '../../components/ins-materials/LessonActionSelect'
import PopUp from '../../components/UI/PopUp'
import { UiLoading } from '../../components/UI/UiLoading'
import { NoDataInfo } from '../../components/UI/NoDataInfo'
import { ReactComponent as AddIcon } from '../../assets/plusIconAdmin.svg'
import { CreateLessonModal } from '../../components/ins-materials/CreateLessonModal'
import { RenameModal } from '../../components/ins-materials/RenameModal'
import { CreatePresentationModal } from '../../components/ins-materials/CreatePresentation'
import { EditPresentationModal } from '../../components/ins-materials/EditPresentationModal'
import { PpesentationDeleteModal } from '../../components/ins-materials/DeletePresentationModal'
import { CreateVideoModal } from '../../components/ins-materials/CreateVideoModal'
import { EditVideoModal } from '../../components/ins-materials/EditVideoModal'
import { DeleteVideoModal } from '../../components/ins-materials/DeleteVideoModal'

const render = [
   {
      id: Math.random(),
      name: 'Видеоурок',
   },
   {
      id: Math.random(),
      name: 'Презентация',
   },
   {
      id: Math.random(),
      name: 'Задание',
   },
   {
      id: Math.random(),
      name: 'Ссылка',
   },
   {
      id: Math.random(),
      name: 'Тест',
   },
]

export const InstructorMaterials = () => {
   const { id } = useParams()
   const dispatch = useDispatch()

   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)

   const { courseName } = useSelector((state) => state.insCourses)
   const { lessons, status, error } = useSelector((state) => state.materials)
   const [state, setState] = React.useState('')
   const [validateError, setValidateError] = React.useState(false)

   const openCreateModal = () => {
      setParams({ modalOpen: 'CREATE-LESSON', id })
   }
   const submitEdit = (lessonId, lessonName) => {
      setParams({ modalOpen: 'RENAME-LESSON', id, lessonId, lessonName })
   }

   const deletLesson = (lessonId) => {
      dispatch(deleteLesson({ id: lessonId, courseId: id }))
   }

   const onGetActionHandler = (action, idLesson) => {
      switch (action) {
         case 'Видеоурок':
            setParams({ modalOpen: 'POST-VIDEO', idLesson, courseId: id })
            break
         case 'Презентация':
            setParams({ modalOpen: 'POST-PPTX', idLesson, courseId: id })
            break
         default:
            console.log('undefined action')
      }
   }

   // * presentation functions
   const editPresentation = (presentationId) => {
      if (presentationId === null) {
         setValidateError((prev) => !prev)
      } else {
         setParams({ modalOpen: 'EDIT-PPTX', presentationId })
      }
   }
   const deletePresentation = (presentationId) => {
      if (presentationId === null) {
         setValidateError((prev) => !prev)
      } else {
         setParams({ modalOpen: 'DELETE-PPTX', presentationId })
      }
   }

   // * video lesson functions
   const editVideo = (videoId, lessonId) => {
      if (videoId === null) {
         setValidateError((prev) => !prev)
      } else {
         setParams({ modalOpen: 'EDIT-VIDEO', videoId, lessonId })
      }
   }
   const deleteVideo = (videoId) => {
      if (videoId === null) {
         setValidateError((prev) => !prev)
      } else {
         setParams({ modalOpen: 'DELETE-VIDEO', videoId })
      }
   }

   useEffect(() => {
      dispatch(getCoursesLessons(id))
      dispatch(getCoursesById(id))
   }, [dispatch])

   return (
      <>
         {validateError && (
            <PopUp
               messageType="error"
               message="Файл не существует, сначала создайте"
            />
         )}
         {status === 'created' && (
            <PopUp message="Урок успешно создан" messageType="success" />
         )}
         {status === 'deleted' && (
            <PopUp message="Удалено" messageType="success" />
         )}
         {status === 'edited' && (
            <PopUp message="Отредактировано" messageType="success" />
         )}
         {status === 'uploaded' && (
            <PopUp message="Загружено успешно" messageType="success" />
         )}
         {error && <PopUp message={error} messageType="error" />}

         {status === 'loading' ? (
            <UiLoading />
         ) : (
            <StudetsMain>
               <HeaderLoyout roles="Иструктор" links={courseLinks(id)} />
               <HeaderBlock>
                  <BreadCrumbsBlock>
                     <BreadCrumbs
                        paths={courseCrumbs(courseName, 'Материалы')}
                     />
                  </BreadCrumbsBlock>
                  <CustomButton variant="contained" onClick={openCreateModal}>
                     <AddIcon />
                     <ButtonText> Добавить урок</ButtonText>
                  </CustomButton>
               </HeaderBlock>

               {lessons.length === 0 ? (
                  <NoDataInfo title="Тут пока нет никаких уроков" />
               ) : (
                  <LessonGrid>
                     {lessons?.map((element) => (
                        <LessonCard
                           key={element.lessonId}
                           headerIcon={EditLesson}
                           actionIcon={DeleteLesson}
                           editHandler={() =>
                              submitEdit(element.lessonId, element.lessonName)
                           }
                           deleteHandler={() => deletLesson(element.lessonId)}
                           // * presentation functions
                           editPresentation={() =>
                              editPresentation(element.presentationId)
                           }
                           deletePresentation={() =>
                              deletePresentation(element.presentationId)
                           }
                           // * video lesson functions
                           editVideo={() =>
                              editVideo(element.videoId, element.lessonId)
                           }
                           deleteVideo={() => deleteVideo(element.videoId)}
                           actionButton={
                              <ActionSelect
                                 getActionHandler={onGetActionHandler}
                                 placeholder="Добавить"
                                 data={render}
                                 personName={state}
                                 idLesson={element.lessonId}
                                 setPersonName={setState}
                              />
                           }
                           title={element.lessonName}
                        />
                     ))}
                  </LessonGrid>
               )}

               <CreateLessonModal
                  open={modalOpen === 'CREATE-LESSON'}
                  onClose={() => setParams({})}
               />

               <RenameModal
                  open={modalOpen === 'RENAME-LESSON'}
                  onClose={() => setParams({})}
               />

               {modalOpen === 'POST-PPTX' && (
                  <CreatePresentationModal
                     open={modalOpen === 'POST-PPTX'}
                     onClose={() => setParams({})}
                  />
               )}

               {modalOpen === 'EDIT-PPTX' && (
                  <EditPresentationModal
                     open={modalOpen === 'EDIT-PPTX'}
                     onClose={() => setParams({})}
                  />
               )}
               {modalOpen === 'DELETE-PPTX' && (
                  <PpesentationDeleteModal
                     open={modalOpen === 'DELETE-PPTX'}
                     onClose={() => setParams({})}
                  />
               )}
               {modalOpen === 'POST-VIDEO' && (
                  <CreateVideoModal
                     open={modalOpen === 'POST-VIDEO'}
                     onClose={() => setParams({})}
                  />
               )}
               {modalOpen === 'EDIT-VIDEO' && (
                  <EditVideoModal
                     open={modalOpen === 'EDIT-VIDEO'}
                     onClose={() => setParams({})}
                  />
               )}
               {modalOpen === 'DELETE-VIDEO' && (
                  <DeleteVideoModal
                     open={modalOpen === 'DELETE-VIDEO'}
                     onClose={() => setParams({})}
                  />
               )}
            </StudetsMain>
         )}
      </>
   )
}
const StudetsMain = styled.div`
   padding: 0 10px;
   background-color: #eff0f4;
   width: 100%;
   overflow: auto;
`
const LessonGrid = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   column-gap: 20px;
   row-gap: 20px;
   margin-top: 10px;
`
const BreadCrumbsBlock = styled.div``
const CustomButton = style(Button)`
   height: 40px;
   width: 174px;
   border-radius: 8px;
`
const ButtonText = styled.p`
   font-size: 14px;
   margin-left: 8px;
`
const HeaderBlock = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 24px 0;
   margin: 0 39px;
`

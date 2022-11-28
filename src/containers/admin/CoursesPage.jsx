import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import FadeLoader from 'react-spinners/FadeLoader'
import {
   deleteCourse,
   getCourse,
} from '../../store/slices/admin-slices/courses-slices/courses-actions'
import UiButton from '../../components/UI/UIButton'
import CoursesModal from '../../components/admin-courses/CoursesModal'
import GroupCard from '../../components/UI/GroupCard'
import CourseMeatBalls from '../../components/admin-courses/CourseMeatBalls'
import PopUp from '../../components/UI/PopUp'
import CourseEditModal from '../../components/admin-courses/CourseEditModal'
import CourseAssignModal from '../../components/admin-courses/CourseAssignModal'

export const CoursesPage = () => {
   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)
   const navigate = useNavigate()
   const { error, status } = useSelector((state) => state.courses)
   const { courses } = useSelector((state) => state.courses)
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getCourse())
   }, [dispatch])

   const openDeleteModal = (id) => {
      dispatch(deleteCourse(id))
   }

   const setClose = () => {
      setParams({})
   }

   const openEdditModal = (id) => {
      setParams({ modalOpen: 'EDIT-COURSE', id })
   }

   const openAssignModal = (id) => {
      setParams({ modalOpen: 'ASSIGN-TEACHER', id })
   }

   const navigateHandler = (id) => {
      navigate(`course-students/${id}`)
   }

   return (
      <ContainerDiv>
         {error && <PopUp message={error} messageType="error" />}
         {status === 'created' && (
            <PopUp message="Группа успешно создана" messageType="success" />
         )}
         {status === 'assigned' && (
            <PopUp message="Успешно назначено" messageType="success" />
         )}
         {status === 'deleted' && (
            <PopUp message="Группа удалена" messageType="success" />
         )}
         {status === 'edited' && (
            <PopUp
               message="Группа отредактирована успешно"
               messageType="success"
            />
         )}
         <ButtonDiv>
            <UiButton
               onClick={() => setShowModal((prev) => !prev)}
               variant="contained"
               background="#3772FF"
               borderradius="8px"
               width="161px"
               height="40px"
               hover="#1D60FF"
            >
               + Создать курс
            </UiButton>
         </ButtonDiv>
         {status === 'loading' ? (
            <LoadingBlock>
               <FadeLoader size={200} color="#3772FF" />
            </LoadingBlock>
         ) : (
            <CardDiv>
               {courses?.map((el) => (
                  <GroupCard
                     key={el.id}
                     onClick={() => navigateHandler(el.id)}
                     someImage={el.image}
                     someName={el.courseName}
                     someYear={el.dateOfStart}
                     someParagraph={el.description}
                     someButton={
                        <CourseMeatBalls
                           openDeleteModal={openDeleteModal}
                           openEdditModal={openEdditModal}
                           openAssignModal={openAssignModal}
                           id={el.id}
                        />
                     }
                  />
               ))}
            </CardDiv>
         )}

         {showModal && <CoursesModal open={showModal} isOpen={setShowModal} />}
         {modalOpen === 'EDIT-COURSE' && (
            <CourseEditModal
               open={modalOpen === 'EDIT-COURSE'}
               onClose={setClose}
            />
         )}
         {modalOpen === 'ASSIGN-TEACHER' && (
            <CourseAssignModal
               open={modalOpen === 'ASSIGN-TEACHER'}
               onClose={setClose}
            />
         )}

         <Outlet />
      </ContainerDiv>
   )
}

const ContainerDiv = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   background: #eff0f4;
   padding: 23px 40px 69px 20px;
`
const ButtonDiv = styled.div`
   display: flex;
   justify-content: end;
`
const CardDiv = styled.div`
   margin-top: 24px;
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
`
const LoadingBlock = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
`

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { getCourse } from '../../store/slices/admin-slices/courses-slices/courses-actions'
import UiButton from '../../components/UI/UIButton'
import CoursesModal from '../../components/admin-courses/CoursesModal'
import GroupCard from '../../components/UI/GroupCard'
// import GroupCard from '../../components/UI/GroupCard'

export const CoursesPage = () => {
   const { courses } = useSelector((state) => state.course)
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCourse())
   }, [])
   return (
      <ContainerDiv>
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

         <CardDiv>
            {courses?.map((el) => (
               <GroupCard
                  someImage={el.image}
                  someName={el.courseName}
                  someYear={el.dateOfStart}
                  someParagraph={el.description}
               />
            ))}
         </CardDiv>

         {showModal && <CoursesModal open={showModal} isOpen={setShowModal} />}

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

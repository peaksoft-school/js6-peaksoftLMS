import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'
import UIButton from '../../components/UI/UIButton'
import { ReactComponent as RenameIcon } from '../../assets/renameIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import AddInstructorModal from '../../components/admin-teacher/AddInstructorModal'
import { ReactComponent as PlusIcon } from '../../assets/buttonPlusIcon.svg'
// import IconButton from '../../components/UI/IconButton'
import { HEAD_DATA } from '../../utils/constants/constants'
import {
   deleteTeacher,
   getAllTeacher,
} from '../../store/slices/admin-slices/teacher-slices/teacherActions'
import RenameInstructorModal from '../../components/admin-teacher/RenameInstructorModal'

export const TeachersPage = () => {
   const dispatch = useDispatch()
   const [params, setParams] = useSearchParams()
   const { modalOpen } = Object.fromEntries(params)
   const { getTeacher } = useSelector((state) => state.teacher)
   const [open, setOpen] = useState(false)
   // const [rename, setRename] = useState(false)
   // const navigate = useNavigate()

   const render = getTeacher.map((el, i) => {
      return {
         itemId: el.id,
         id: i + 1,
         name: el.fullName,
         format: el.specialization,
         phone: el.phoneNumber,
         email: el.email,
      }
   })
   useEffect(() => {
      dispatch(getAllTeacher())
   }, [])
   // const showModalHandler = () => {
   //    setParams({ modalOpen: 'CREATE-GROUP' })
   // }
   const onCloseHandler = () => {
      setOpen(false)
   }
   const onCloseRenameHandler = () => {
      setParams({})
   }
   const deleteHandler = (id) => {
      dispatch(deleteTeacher(id))
   }
   const renameHandler = (itemId) => {
      setParams({ modalOpen: 'EDDIT-GROUP', itemId })
   }

   // const showModalHandler = () => {
   //    setParams({ modalOpen: 'CREATE-GROUP' })
   // }
   // const openDeleteModal = (id) => {
   //    dispatch(deleteGroups(id))
   // }

   // const openEdditModal = (id) => {
   //    setParams({ modalOpen: 'EDDIT-GROUP', id })
   // }
   // const onCloseModal = () => {
   //    setParams({})
   // }
   // const navigateHanlder = (id) => {
   //    navigate(`/admin/groups/${id}`)
   // }
   return (
      <>
         <Div>
            <Header>header</Header>
            <ButtonWrapper>
               <UIButton
                  startIcon={<PlusIcon />}
                  onClick={() => setOpen(true)}
                  variant="contained"
                  background="#3772FF"
               >
                  Добавить учителя
               </UIButton>
            </ButtonWrapper>
            <Wrapper height="500px">
               <UiTable
                  headData={HEAD_DATA}
                  data={render}
                  actions
                  firstIcon={<RenameIconTeacher />}
                  // secondIcon={<RenameIconTeacher />}
                  firstOnClick={renameHandler}
                  // secondOnClick={renameHandler}
                  thirdIcon={<DeleteIconTeacher />}
                  thirdOnClick={deleteHandler}
               />
            </Wrapper>
         </Div>
         {modalOpen === 'EDDIT-GROUP' && (
            <RenameInstructorModal
               handleClose={onCloseRenameHandler}
               open={modalOpen === 'EDDIT-GROUP'}
            />
         )}

         {open && (
            <AddInstructorModal handleClose={onCloseHandler} open={open} />
         )}
      </>
   )
}
const ButtonWrapper = styled.div`
   display: flex;
   justify-content: end;
   margin-bottom: 20px;
   /* width: 1140px; */
`
const Header = styled.div`
   height: 75px;
   margin-bottom: 24px;
   text-align: center;
   background-color: aqua;
`
const Div = styled.div`
   background: #eff0f4;
   margin: 0 40px 0 20px;
`
const DeleteIconTeacher = styled(DeleteIcon)`
   cursor: pointer;
`
const RenameIconTeacher = styled(RenameIcon)`
   cursor: pointer;
`

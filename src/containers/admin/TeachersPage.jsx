import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UiTable from '../../components/UI/UiTable'
import Wrapper from '../../components/UI/Wrapper'
import UIButton from '../../components/UI/UIButton'
import { ReactComponent as RenameIcon } from '../../assets/renameIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import AddInstructorModal from './AddInstructorModal'
import { ReactComponent as PlusIcon } from '../../assets/buttonPlusIcon.svg'
// import IconButton from '../../components/UI/IconButton'
import { HEAD_DATA } from '../../utils/constants/constants'
import {
   deleteTeacher,
   getAllTeacher,
   renameTeacher,
} from '../../store/slices/admin-slices/teacher-slices/teacherActions'
import RenameInstructorModal from './RenameInstructorModal'

export const TeachersPage = () => {
   const dispatch = useDispatch()
   const counter = useSelector((state) => state.addTeacher.getTeacher)
   // const renameSelect = useSelector((state) => state.addTeacher.rename)
   // console.log(renameSelect)
   const [open, setOpen] = useState(false)
   const [rename, setRename] = useState(false)
   const onCloseHandler = () => {
      setOpen(false)
   }
   const onCloseRenameHandler = () => {
      setRename(false)
   }
   useEffect(() => {
      dispatch(getAllTeacher())
   }, [])
   const deleteHandler = (id) => {
      dispatch(deleteTeacher(id))
      // console.log(id, 'safns')
   }
   const renameHandler = (id) => {
      setRename(true)
      dispatch(renameTeacher(id))
   }
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
                  data={counter}
                  actions
                  secondIcon={<RenameIconTeacher />}
                  secondOnClick={renameHandler}
                  thirdIcon={<DeleteIconTeacher />}
                  thirdOnClick={deleteHandler}
               />
            </Wrapper>
         </Div>
         {rename && (
            <RenameInstructorModal
               handleClose={onCloseRenameHandler}
               open={rename}
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

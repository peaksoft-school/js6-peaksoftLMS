import styled from 'styled-components'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UIButton from '../../components/UI/UIButton'
import { ReactComponent as ExporExcelIcon } from '../../assets/exportExcel.svg'
import { ReactComponent as AddPlusIcon } from '../../assets/addPlusIcon.svg'
import { ReactComponent as RenameIcon } from '../../assets/renameIcon.svg'
import { ReactComponent as DeleteIcon } from '../../assets/deleteIcon.svg'
import AddStudentModal from '../../components/student-groups/AddStudentModal'
import { getFilteredlStudents } from '../../store/slices/admin-slices/admin-student/student-actions'
import Wrapper from '../../components/UI/Wrapper'
import UiTable from '../../components/UI/UiTable'
import {
   LEARNING_FORMAT,
   STUDENT_HEADER,
} from '../../utils/constants/constants'
import StudyFormatSelect from '../../components/UI/StudentsSelects/StudyFormatSelect'

export const StudentsPage = () => {
   const [stateItems, setStateItems] = useState(false)
   const [studyFormat, setStudyFormat] = useState('')
   const dispatch = useDispatch()

   const openModalAddStudent = () => {
      setStateItems(false)
   }

   const filterStudentsHandler = () => {
      dispatch(getFilteredlStudents(studyFormat))
   }
   useEffect(() => {
      dispatch(getFilteredlStudents())
   }, [])

   const getValueFormatsSelect = (format) => {
      setStudyFormat({ studyFormat: format })
   }

   const getOptionValue = (name) => {
      setStudyFormat(name)
   }

   return (
      <Conatiner>
         <Block>
            <StudyFormatSelect
               placeholder="Формат обучения"
               value={studyFormat.studyFormat}
               setValue={getValueFormatsSelect}
               options={LEARNING_FORMAT}
               getOptionValue={getOptionValue}
               onChange={filterStudentsHandler}
            >
               Формат обучения
            </StudyFormatSelect>
            <ButtonBlock>
               <UIButton
                  startIcon={<ExporExcelIcon />}
                  variant="outlined"
                  borderradius="8px"
                  margin="0 10px 0 0"
                  fontSize="14px"
                  width="162px"
                  height="40px"
               >
                  Импорт Excel
               </UIButton>
               <UIButton
                  onClick={() => setStateItems((prev) => !prev)}
                  startIcon={<AddPlusIcon />}
                  variant="contained"
                  borderradius="8px"
                  fontSize="14px"
                  width="204px"
                  height="40px"
               >
                  Добавить студента
               </UIButton>
            </ButtonBlock>
         </Block>

         <TableMain>
            <Wrapper width="1240px" margin="24px 0" height="100%">
               <UiTable
                  headData={STUDENT_HEADER}
                  actions
                  secondIcon={<RenameIcon />}
                  thirdIcon={<DeleteIcon />}
               />
            </Wrapper>
         </TableMain>
         <AddStudentModal handleClose={openModalAddStudent} open={stateItems} />
      </Conatiner>
   )
}
const Conatiner = styled.div`
   width: 100%;
   background: #eff0f4;
`
const TableMain = styled.div`
   display: flex;
   justify-content: center;
`
const Block = styled.div`
   margin-left: 69.5px;
   display: flex;
   justify-content: space-between;
`
const ButtonBlock = styled.div`
   display: flex;
   gap: 10px;
   margin-right: 5.85%;
`

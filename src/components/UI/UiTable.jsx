import React, { useEffect } from 'react'
import styled from 'styled-components'
import {
   TableBody,
   TableContainer,
   TableCell,
   TableHead,
   TableRow,
   Paper,
   Table,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getAllStudents } from '../../store/slices/admin-slices/admin-student/student-actions'

const UiTable = (props) => {
   const dispatch = useDispatch()
   const students = useSelector((state) => state.students.students)
   useEffect(() => {
      dispatch(getAllStudents())
   }, [])

   const {
      headData,
      actions,
      firstIcon,
      secondIcon,
      thirdIcon,
      firstOnClick,
      secondOnClick,
      thirdOnClick,
   } = props
   return (
      <div>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <HeadTable>
                  <StyledTableRow>
                     {headData.map((item) => (
                        <React.Fragment key={item.id}>
                           <TableCell align="left">{item.idName}</TableCell>
                           <TableCell align="left">{item.firstName}</TableCell>
                           <TableCell align="left">{item.groupName}</TableCell>
                           <TableCell align="left">
                              {item.phoryatLearning}
                           </TableCell>
                           <TableCell align="left">{item.phoneName}</TableCell>
                           <TableCell align="left">{item.emailName}</TableCell>
                           <TableCell align="left">{item.password}</TableCell>
                           {actions && (
                              <TableCell align="left">
                                 {item.actionsName}
                              </TableCell>
                           )}
                        </React.Fragment>
                     ))}
                  </StyledTableRow>
               </HeadTable>
               <TableBody>
                  {students?.map((el, index) => (
                     <RowTable
                        key={el.id}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row">
                           <span>{index + 1}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.fullName}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.groupName}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.studyFormat}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.phoneNumber}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.email}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.password}</span>
                        </TableCell>
                        {actions && (
                           <div>
                              <TableCell
                                 onClick={(e) => {
                                    e.stopPropagation()
                                    firstOnClick(el.itemId)
                                 }}
                                 align="left"
                              >
                                 {firstIcon}
                              </TableCell>
                              <TableCell
                                 onClick={(e) => {
                                    e.stopPropagation()
                                    secondOnClick(el.itemId)
                                 }}
                                 align="left"
                              >
                                 {secondIcon}
                              </TableCell>
                              <TableCell
                                 onClick={() => thirdOnClick(el.itemId)}
                                 align="left"
                              >
                                 {thirdIcon}
                              </TableCell>
                           </div>
                        )}
                     </RowTable>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </div>
   )
}
export default UiTable
const HeadTable = styled(TableHead)`
   &.MuiTableHead-root {
      color: #1d293f;
      font-weight: 600;
      font-size: 14px;
      line-height: 22px;
   }
`
const RowTable = styled(TableRow)`
   & .MuiTableCell-root {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.02em;
      line-height: 22px;
      color: #1d293f;
   }
   &:nth-of-type(odd) {
      background: rgba(26, 35, 126, 0.07);
   }
`
const StyledTableRow = styled(TableRow)`
   & .MuiTableCell-root {
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: #1d293f;
   }
`

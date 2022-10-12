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

const UiTable = (props) => {
   const { data, password, actions } = props
   return (
      <div>
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <HeadTable>
                  <StyledTableRow>
                     <TableCell align="left">ID</TableCell>
                     <TableCell align="left">Имя Фамилия</TableCell>
                     <TableCell align="left">Группа</TableCell>
                     <TableCell align="left">Формат</TableCell>
                     <TableCell align="left">Номер телефона</TableCell>
                     <TableCell align="left">E-mail</TableCell>
                     {password && <TableCell align="left">Пароль</TableCell>}
                     {actions && <TableCell align="left">Действия</TableCell>}
                  </StyledTableRow>
               </HeadTable>
               <TableBody>
                  {data.map((el) => (
                     <RowTable
                        key={el.id}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row">
                           <span>{el.id}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.name}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.group}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.format}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.phone}</span>
                        </TableCell>
                        <TableCell align="left">
                           <span>{el.email}</span>
                        </TableCell>
                        {password && (
                           <TableCell align="left">
                              <span>{el.pasword}</span>
                           </TableCell>
                        )}

                        {actions && (
                           <div>
                              <TableCell align="left">
                                 <span>x</span>
                              </TableCell>
                              <TableCell align="left">
                                 <span>x</span>
                              </TableCell>
                              <TableCell align="left">
                                 <span>x</span>
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

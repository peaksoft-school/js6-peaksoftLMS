import React from 'react'
import {
   TableBody,
   TableContainer,
   TableCell,
   TableHead,
   TableRow,
   Paper,
   Table,
} from '@mui/material'
import styled from 'styled-components'

const DUMMY_DATA = [
   {
      id: 1,
      name: 'Aile',
      group: 'Yaroslavskaya',
      edu_form: 'Female',
      phone: '236-416-3193',
      email: 'aferrer0@spiegel.de',
      pasword: '22hIb6c1uB',
      actions: true,
   },
   {
      id: 2,
      name: 'Stacee',
      group: 'Siennica Różana',
      edu_form: 'Male',
      phone: '237-407-5517',
      email: 'sdjordjevic1@canalblog.com',
      pasword: 'OKLgWcbxg1yg',
      actions: false,
   },
   {
      id: 3,
      name: 'Lynn',
      group: 'Elvas',
      edu_form: 'Male',
      phone: '929-966-9081',
      email: 'lroelofs2@europa.eu',
      pasword: 'j3jIJejoQ',
      actions: false,
   },
   {
      id: 4,
      name: 'Teressa',
      group: 'Mukayrās',
      edu_form: 'Female',
      phone: '466-712-7985',
      email: 'tstrelitzki3@feedburner.com',
      pasword: 'B4ydhxlm',
      actions: true,
   },
   {
      id: 5,
      name: 'Madeleine',
      group: 'Madīnat ash Shamāl',
      edu_form: 'Female',
      phone: '802-156-1375',
      email: 'mruthven4@bandcamp.com',
      pasword: 'tlrK9lOzY',
      actions: false,
   },
]

const UiTable = () => {
   //    function createData(name, calories, fat, carbs, protein) {
   //       return { name, calories, fat, carbs, protein }
   //    }

   //    const rows = [
   //       createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
   //       createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
   //       createData('Eclair', 262, 16.0, 24, 6.0),
   //       createData('Cupcake', 305, 3.7, 67, 4.3),
   //       createData('Gingerbread', 356, 16.0, 49, 3.9),
   //    ]
   return (
      <div>
         {' '}
         <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
               <HeadTable>
                  <TableRow>
                     <TableCell>ID</TableCell>
                     <TableCell align="right">Имя Фамилия</TableCell>
                     <TableCell align="right">Специализация</TableCell>
                     <TableCell align="right">Номер телефона</TableCell>
                     <TableCell align="right">E-mail</TableCell>
                     <TableCell align="right">Пароль</TableCell>
                  </TableRow>
               </HeadTable>
               <TableBody>
                  {DUMMY_DATA.map((row) => (
                     <TableRow
                        key={row.id}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component="th" scope="row">
                           {row.id}
                        </TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.edu_form}</TableCell>
                        <TableCell align="right">{row.phone}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.pasword}</TableCell>
                        <TableCell align="right">{row.actions}</TableCell>
                     </TableRow>
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

import React from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { ru } from 'date-fns/locale'
import styled from 'styled-components'

function DatePicker({ value, handleChange }) {
   return (
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
         <Stack spacing={3}>
            <DeskDatePicker
               inputFormat="dd-MM-yyyy"
               value={value}
               onChange={handleChange}
               renderInput={(params) => <TextField {...params} />}
            />
         </Stack>
      </LocalizationProvider>
   )
}

export default DatePicker
const DeskDatePicker = styled(DesktopDatePicker)`
   width: 149px;
   height: 42px;
   border: 110px solid #ca3838;
   border-radius: 10px;
`

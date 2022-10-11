import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
   MuiPickersUtilsProvider,
   KeyboardDatePicker,
} from '@material-ui/pickers'

export default function MaterialUIPickers() {
   // The first commit of Material-UI
   const [selectedDate, setSelectedDate] = React.useState(
      new Date('2014-08-18T21:11:54')
   )

   const handleDateChange = (date) => {
      setSelectedDate(date)
   }

   return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
         <Grid container justifyContent="space-around">
            <KeyboardDatePicker
               disableToolbar
               variant="inline"
               format="MM/dd/yyyy"
               margin="normal"
               id="date-picker-inline"
               value={selectedDate}
               onChange={handleDateChange}
               KeyboardButtonProps={{
                  'aria-label': 'change date',
               }}
            />
         </Grid>
      </MuiPickersUtilsProvider>
   )
}

// const DeskDatePicker = styled(DesktopDatePicker)`
//    width: 149px;
//    height: 42px;
//    border: 110px solid #ca3838;
//    border-radius: 10px;
// `

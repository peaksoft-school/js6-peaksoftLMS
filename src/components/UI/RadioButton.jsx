import * as React from 'react'
import Radio from '@mui/material/Radio'
import { styled } from '@mui/material'

export default function RadioButton() {
   const [selectedValue, setSelectedValue] = React.useState('a')

   const handleChange = (event) => {
      setSelectedValue(event.target.value)
   }

   return (
      <div>
         <RadioButtonContainer
            checked={selectedValue === 'a'}
            onChange={handleChange}
            value="a"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
         />
         <RadioButtonContainer
            checked={selectedValue === 'b'}
            onChange={handleChange}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
         />
      </div>
   )
}

const RadioButtonContainer = styled(Radio)`
   height: 20px;
   width: 20px;
`

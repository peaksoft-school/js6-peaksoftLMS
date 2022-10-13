import React, { useState } from 'react'
import { OutlinedInput, MenuItem, FormControl, Select } from '@mui/material/'

const staticData = [
   'Oliver Hansen',
   'Van Henry',
   'April Tucker',
   'Ralph Hubbard',
   'Omar Alexander',
   'Carlos Abbott',
   'Miriam Wagner',
   'Bradley Wilkerson',
   'Virginia Andrews',
   'Kelly Snyder',
]
export const SelectInput = (props) => {
   const { defaultPlaceholder } = props
   const [personName, setPersonName] = useState('')
   const clickHandler = (itemName) => {
      setPersonName(itemName)
   }
   return (
      <div>
         <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
               displayEmpty
               value={personName}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return defaultPlaceholder ? (
                        <em>{defaultPlaceholder}</em>
                     ) : (
                        'Добавить'
                     )
                  }
                  return <em>{personName}</em>
               }}
            >
               {staticData.map((name) => (
                  <MenuItem
                     onClick={() => clickHandler(name)}
                     selected
                     key={name}
                     value={name}
                  >
                     {name}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}

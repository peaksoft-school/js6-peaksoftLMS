import React, { useState } from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import { MenuItem, FormControl, Checkbox, styled, Select } from '@mui/material'

export const TeacherSelect = ({ names }) => {
   const [personName, setPersonName] = useState([])

   const handleChange = (event) => {
      const { value } = event.target
      setPersonName(typeof value === 'string' ? value.split(',') : value)
   }

   return (
      <div>
         <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
            <Select
               multiple
               displayEmpty
               value={personName}
               onChange={handleChange}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <em>Выбрать исполнителя</em>
                  }

                  return selected.join(', ')
               }}
            >
               {names.map((name) => (
                  <CustomMenuItem key={name} value={name}>
                     {name}{' '}
                     <Checkbox
                        checked={personName.some((e) => e.includes(name))}
                     />
                  </CustomMenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   )
}

const CustomMenuItem = styled(MenuItem)`
   display: flex;
   justify-content: space-between;
`

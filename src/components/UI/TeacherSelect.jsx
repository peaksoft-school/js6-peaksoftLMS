import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput'
import { MenuItem, FormControl, Checkbox, styled, Select } from '@mui/material'

export const TeacherSelect = (props) => {
   const { personName, setPersonName, data } = props

   const handleChange = (event) => {
      const { value } = event.target
      setPersonName(typeof value === 'string' ? value.split(',') : value)
   }

   return (
      <div>
         <FormControl>
            <CustomSelect
               multiple
               displayEmpty
               value={personName}
               onChange={handleChange}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <em>Выбрать учителя</em>
                  }

                  return selected.join(', ')
               }}
            >
               {data.map((name) => (
                  <CustomMenuItem key={name} value={name}>
                     {name}{' '}
                     <Checkbox
                        checked={personName.some((e) => e.includes(name))}
                     />
                  </CustomMenuItem>
               ))}
            </CustomSelect>
         </FormControl>
      </div>
   )
}

const CustomMenuItem = styled(MenuItem)`
   display: flex;
   justify-content: space-between;
`

const CustomSelect = styled(Select)`
   border: 1px solid #d4d4d4;
   height: 48px;
   padding: 0 !important;
   width: 491px;
   border-radius: 10px;
`

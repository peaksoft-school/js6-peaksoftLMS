// import { FormControl, InputLabel, NativeSelect } from '@mui/material'
// import React from 'react'
// import styled from 'styled-components'

// const SelectInput = () => {
//    return (
//       <FormContainer fullWidth>
//          <InputLabel variant="standard" htmlFor="uncontrolled-native">
//             Age
//          </InputLabel>
//          <NativeSelect
//             defaultValue={30}
//             inputProps={{
//                name: 'age',
//                id: 'uncontrolled-native',
//             }}
//          >
//             <option value={10}>Ten</option>
//             <option value={20}>Twenty</option>
//             <option value={30}>Thirty</option>
//          </NativeSelect>
//       </FormContainer>
//    )
// }

// const FormContainer = styled(FormControl)`
//    &.css-q8hpuo-MuiFormControl-root {
//       width: 200px;
//    }
// `

// export default SelectInput
import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import styled from 'styled-components'

const MenuProps = {
   PaperProps: {
      style: {
         width: 141,
      },
   },
}

const names = ['Видеоурок', 'Презентация', 'Задание', 'Ссылка', 'Текст']

function getStyles(name, personName, theme) {
   return {
      fontWeight:
         personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   }
}

export default function MultipleSelectPlaceholder() {
   const theme = useTheme()
   const [personName, setPersonName] = React.useState([])

   const handleChange = (event) => {
      const {
         target: { value },
      } = event
      setPersonName(typeof value === 'string' ? value.split(',') : value)
   }

   return (
      <div>
         <FormControl sx={{ width: 141 }}>
            <FormContainer
               multiple
               displayEmpty
               value={personName}
               onChange={handleChange}
               input={<OutlinedInput />}
               renderValue={(selected) => {
                  if (selected.length === 0) {
                     return <p>Добавить</p>
                  }

                  return selected.join(', ')
               }}
               MenuProps={MenuProps}
               inputProps={{ 'aria-label': 'Without label' }}
            >
               {names.map((name) => (
                  <MenuItem
                     key={name}
                     value={name}
                     style={getStyles(name, personName, theme)}
                  >
                     {name}
                  </MenuItem>
               ))}
            </FormContainer>
         </FormControl>
      </div>
   )
}
const FormContainer = styled(Select)`
   .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
      padding: none;
   }
`

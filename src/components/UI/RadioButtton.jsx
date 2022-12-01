import * as React from 'react'
import styled from 'styled-components'
import { Radio, RadioGroup } from '@mui/material'
import { ReactComponent as SuccessIcon } from '../../assets/checkedRadio.svg'
import { ReactComponent as ErrorIcon } from '../../assets/crossRadio.svg'

const RadioButton = ({ onChange, value, changeRadio, name, type }) => {
   return (
      <RadioGroup
         aria-labelledby="demo-radio-buttons-group-label"
         name="radio-buttons-group"
      >
         {!changeRadio ? (
            <StyledRadio
               type={type}
               name={name}
               onChange={onChange}
               value={value}
            />
         ) : (
            <StyledRadio
               onChange={onChange}
               value={value}
               checkedIcon={
                  (changeRadio === 'error' && <ErrorIcon />) ||
                  (changeRadio === 'success' && <SuccessIcon />)
               }
            />
         )}
      </RadioGroup>
   )
}

export default RadioButton

const StyledRadio = styled(Radio)`
   &.Mui-root {
      width: 20px;
      height: 20px;
   }
`

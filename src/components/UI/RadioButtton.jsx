import * as React from 'react'
import Radio from '@mui/material/Radio'
import { styled } from '@mui/material'
import { ReactComponent as SuccessIcon } from '../../assets/checkedRadio.svg'
import { ReactComponent as ErrorIcon } from '../../assets/crossRadio.svg'

const RadioButton = ({ onChange, value, changeRadio }) => {
   return (
      <div>
         {!changeRadio ? (
            <StyledRadio onChange={onChange} value={value} />
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
      </div>
   )
}

export default RadioButton

const StyledRadio = styled(Radio)`
   &.Mui-root {
      width: 20px;
      height: 20px;
   }
`

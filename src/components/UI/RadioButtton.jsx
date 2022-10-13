import * as React from 'react'
import Radio from '@mui/material/Radio'
import { styled } from '@mui/material'

const RadioButton = ({ IconSvg, onChange, value }) => {
   return (
      <StyledRadio checkedIcon={IconSvg} onChange={onChange} value={value} />
   )
}

export default RadioButton

const StyledRadio = styled(Radio)`
   &.Mui-root {
      width: 20px;
      height: 20px;
   }
`

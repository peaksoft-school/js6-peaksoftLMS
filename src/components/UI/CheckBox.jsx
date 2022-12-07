import React from 'react'
import Checkbox from '@mui/material/Checkbox'

export default function UiCheckbox({ value, disabled, setIsClicked }) {
   const clickHandler = () => {
      setIsClicked((prev) => !prev)
   }
   return <Checkbox value={value} disabled={disabled} onClick={clickHandler} />
}

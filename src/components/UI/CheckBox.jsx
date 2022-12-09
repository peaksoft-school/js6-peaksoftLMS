import React from 'react'
import Checkbox from '@mui/material/Checkbox'

export default function UiCheckbox({ value, disabled, setIsClicked, id }) {
   const clickHandler = () => {
      setIsClicked((prev) => !prev)
   }
   return (
      <Checkbox
         id={id}
         value={value}
         disabled={disabled}
         onClick={clickHandler}
      />
   )
}

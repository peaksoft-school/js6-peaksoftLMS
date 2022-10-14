import React from 'react'
import Checkbox from '@mui/material/Checkbox'

export default function UiCheckbox({ disabled, setIsClicked }) {
   const clickHandler = () => {
      setIsClicked((prev) => !prev)
   }
   return <Checkbox disabled={disabled} onClick={clickHandler} />
}

// import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import CheckBox from './components/UI/CheckBox'

export const App = () => {
   const [clicked, setIsClicked] = useState(false)
   console.log(clicked)
   return (
      <div>
         <CheckBox setIsClicked={setIsClicked} />
      </div>
   )
}

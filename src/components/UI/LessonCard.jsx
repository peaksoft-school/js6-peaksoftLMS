import React from 'react'
import styled from 'styled-components'
import { EditIcon } from '@mui/icons-material/'
const LessonCard = () => {
   return (
      <CardContainer>
         <EditIcon />
         <h3>LESSON_1</h3>
      </CardContainer>
   )
}

export default LessonCard

const CardContainer = styled.div`
   width: 560px;
   height: 306px;
   border-radius: 10px;
   background-color: red;
`

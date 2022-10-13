import React from 'react'
import styled from 'styled-components'

const LessonCard = (props) => {
   const { title, headerIcon, actionIcon, actionButton, bodyItem, bodyIcon } =
      props
   return (
      <div className="Card">
         <CardHeader>
            <div className="header-left">
               <h2>
                  {headerIcon}
                  {title}
               </h2>
            </div>
            <div className="header-right">
               {actionButton} <p>{actionIcon}</p>
            </div>
         </CardHeader>
         <div className="Body">
            <p>
               {bodyIcon}
               {bodyItem}
            </p>
         </div>
      </div>
   )
}
export default LessonCard
const CardHeader = styled.div``

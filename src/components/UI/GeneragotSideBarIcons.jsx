import React from 'react'
import GroupSvg from '../../assets/GroupsVector.svg'
import GroupActive from '../../assets/GroupsActive.svg'
import Courses from '../../assets/coursesVector.svg'
import MyCoursesActive from '../../assets/MyCoursesActive.svg'
import Teachers from '../../assets/teachersVector.svg'
import TeachersActive from '../../assets/teachersActive.svg'
import Students from '../../assets/studentsVector.svg'
import StudentsActive from '../../assets/studentsActive.svg'

const GeneragotSideBarIcons = ({ active, index }) => {
   let iconsLink
   if (index === 0) {
      iconsLink = active ? GroupActive : GroupSvg
   } else if (index === 1) {
      iconsLink = active ? MyCoursesActive : Courses
   } else if (index === 2) {
      iconsLink = active ? TeachersActive : Teachers
   } else if (index === 3) {
      iconsLink = active ? StudentsActive : Students
   }

   return <img src={iconsLink} alt="icon" />
}

export default GeneragotSideBarIcons

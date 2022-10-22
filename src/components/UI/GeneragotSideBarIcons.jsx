import React from 'react'
import GroupSvg from '../../assets/GroupsVector.svg'
import GroupActive from '../../assets/GroupsActive.svg'
import Courses from '../../assets/coursesVector.svg'
import MyCoursesActive from '../../assets/MyCoursesActive.svg'
import Teachers from '../../assets/teachersVector.svg'
import TeachersActive from '../../assets/teachersActive.svg'
import Students from '../../assets/studentsVector.svg'
import StudentsActive from '../../assets/studentsActive.svg'

const GeneragotSideBarIcons = ({ id, active }) => {
   let iconsLink

   if (id === 1) {
      iconsLink = active ? GroupActive : GroupSvg
   }
   if (id === 2) {
      iconsLink = active ? MyCoursesActive : Courses
   }
   if (id === 3) {
      iconsLink = active ? TeachersActive : Teachers
   }
   if (id === 4) {
      iconsLink = active ? StudentsActive : Students
   }

   return <img src={iconsLink} alt="icon" />
}

export default GeneragotSideBarIcons

import GroupSvg from '../../assets/GroupsVector.svg'
import GroupActive from '../../assets/GroupsActive.svg'
import CoursesSvg from '../../assets/coursesVector.svg'
import MyCoursesActive from '../../assets/MyCoursesActive.svg'
import TeachersSvg from '../../assets/teachersVector.svg'
import TeachersActive from '../../assets/teachersActive.svg'
import StudentsSvg from '../../assets/studentsVector.svg'
import StudentsActive from '../../assets/studentsActive.svg'

const GeneragotSideBarIcons = ({ active, index }) => {
   let iconsLink
   if (index === 0) {
      iconsLink = active ? GroupActive : GroupSvg
   } else if (index === 1) {
      iconsLink = active ? MyCoursesActive : CoursesSvg
   } else if (index === 2) {
      iconsLink = active ? TeachersActive : TeachersSvg
   } else if (index === 3) {
      iconsLink = active ? StudentsActive : StudentsSvg
   }

   return <img src={iconsLink} alt="icon" />
}

export default GeneragotSideBarIcons

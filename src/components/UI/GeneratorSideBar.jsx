import { ICONS_IMG } from '../../utils/constants/constants'

const GeneragotSideBarIcons = ({ active, index }) => {
   let iconsLink
   if (index === 0) {
      iconsLink = active ? ICONS_IMG.GroupActive : ICONS_IMG.GroupSvg
   } else if (index === 1) {
      iconsLink = active ? ICONS_IMG.CoursesActive : ICONS_IMG.CoursesSvg
   } else if (index === 2) {
      iconsLink = active ? ICONS_IMG.TeachersActive : ICONS_IMG.TeachersSvg
   } else if (index === 3) {
      iconsLink = active ? ICONS_IMG.StudentsActive : ICONS_IMG.StudentsSvg
   }

   return <img src={iconsLink} alt="icon" />
}

export default GeneragotSideBarIcons

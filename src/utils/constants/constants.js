import GroupSvg from '../../assets/GroupsVector.svg'
import GroupActive from '../../assets/GroupsActive.svg'
import CoursesSvg from '../../assets/coursesVector.svg'
import CoursesActive from '../../assets/MyCoursesActive.svg'
import TeachersSvg from '../../assets/teachersVector.svg'
import TeachersActive from '../../assets/teachersActive.svg'
import StudentsSvg from '../../assets/studentsVector.svg'
import StudentsActive from '../../assets/studentsActive.svg'

export const ROUTES = {
   LOGIN: '/login',
   ADMIN: 'admin/*',
   STUDENT: 'student/*',
   INSTRUCTOR: 'Instructor/*',
   // other routes under
}

export const ICONS_IMG = {
   GroupSvg,
   GroupActive,
   CoursesSvg,
   CoursesActive,
   TeachersSvg,
   TeachersActive,
   StudentsSvg,
   StudentsActive,
}

export const SIDELAYOUT_DATA = [
   {
      title: 'Группы',
      id: 1,
      path: '/groups',
      photo: GroupSvg,
      activePhoto: GroupActive,
   },
   {
      title: 'Курсы ',
      id: 2,
      path: '/courses',
      photo: CoursesSvg,
      activePhoto: CoursesActive,
   },
   {
      title: 'Учителя',
      path: '/teachers',
      id: 3,
      photo: TeachersSvg,
      activePhoto: TeachersActive,
   },
   {
      title: 'Студенты',
      path: '/students',
      id: 4,
      photo: StudentsSvg,
      activePhoto: StudentsActive,
   },
]

export const SideData = [
   {
      title: 'Мои курсы',
      id: 1,
      path: '/coures',
      photo: CoursesActive,
      activePhoto: CoursesActive,
   },
]

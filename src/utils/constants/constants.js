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
   INSTRUCTOR: 'instructor/*',
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
      path: '/admin',
      photo: GroupSvg,
      activePhoto: GroupActive,
   },
   {
      title: 'Курсы ',
      id: 2,
      path: '/admin/courses',
      photo: CoursesSvg,
      activePhoto: CoursesActive,
   },
   {
      title: 'Учителя',
      path: '/admin/teachers',
      id: 3,
      photo: TeachersSvg,
      activePhoto: TeachersActive,
   },
   {
      title: 'Студенты',
      path: '/admin/students',
      id: 4,
      photo: StudentsSvg,
      activePhoto: StudentsActive,
   },
]

export const SideData = [
   {
      title: 'Мои курсы',
      id: 1,
      path: '/courses',
      photo: CoursesActive,
      activePhoto: CoursesActive,
   },
]
export const BASE_URL =
   'http://ec2-18-195-58-95.eu-central-1.compute.amazonaws.com/api/'

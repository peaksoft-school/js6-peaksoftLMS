import { AdminRoutes } from '../../containers/AdminRoutes'
import { InstructorRoutes } from '../../containers/InstructorRoutes'
import { StudentRoutes } from '../../containers/StudentRoutes'

export const ROUTES = [
   { role: 'admin', route: <AdminRoutes /> },
   { role: 'instructor', route: <InstructorRoutes /> },
   { role: 'student', route: <StudentRoutes /> },
]

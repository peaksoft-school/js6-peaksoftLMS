import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { InstructorLayout } from '../components/instructor/InstructorLayout'
import { InstructorMain } from '../containers/instructor/InstructorMain'
import { InstructorMaterials } from '../containers/instructor/InstructorMaterials'
import { InstructorStudents } from '../containers/instructor/InstructorStudents'
import { InstructorTask } from '../containers/lesson-containers/InstructorTask'
import { InstructorTest } from '../containers/lesson-containers/InstructorTest'
import { InstructorVideoPage } from '../containers/lesson-containers/InstructorVideo'
import { InstructorPresentaion } from '../containers/lesson-containers/InstructorPresentation'
import { InstructorLinkPage } from '../containers/lesson-containers/InstructorLinkPage'
import { NotFoundPage } from '../containers/NotFoundPage'
import SidebarLayout from '../layout/SidebarLayout'
import { InstructorCreateTask } from '../containers/instructor/InstructorCreateTask'

export const InstructorRoutes = () => {
   return (
      <SidebarLayout>
         <Routes>
            <Route path="/" element={<InstructorLayout />}>
               <Route index element={<InstructorMain />} />
               <Route
                  path="course-students/:id"
                  element={<InstructorStudents />}
               />
               <Route path="materials/:id" element={<InstructorMaterials />} />
               <Route
                  path="video/:courseId/:lessonId"
                  element={<InstructorVideoPage />}
               />
               <Route
                  path="presentataion/:courseId/:lessonId"
                  element={<InstructorPresentaion />}
               />
               <Route
                  path="lesson-link/:courseId/:linkId"
                  element={<InstructorLinkPage />}
               />
               <Route
                  path="task/:courseId/:taskId"
                  element={<InstructorTask />}
               />
               <Route
                  path="test/:courseId/:lessonId"
                  element={<InstructorTest />}
               />
               <Route
                  path="create-task/:courseId/:lessonId"
                  element={<InstructorCreateTask />}
               />
            </Route>
            <Route path="*" index element={<NotFoundPage />} />
         </Routes>
      </SidebarLayout>
   )
}

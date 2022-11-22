import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getCourses } from '../../store/slices/instructor-slices/courses/course-actions'

export const InstructorMain = () => {
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getCourses())
   }, [dispatch])

   return <div>InstructorMain</div>
}

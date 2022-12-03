import { toast } from 'react-toastify'

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}
const showError = (message) => {
   toast.error(message, { position: 'top-right', hideProgressBar: true })
}
export default showError

export const courseLinks = (id) => {
   return [
      {
         name: 'Материалы',
         path: `/instructor/materials/${id}`,
      },
      {
         name: 'Студенты',
         path: `/instructor/course-students/${id}`,
      },
   ]
}

export const courseCrumbs = (courseName, lastPath) => {
   return [
      { path: '/instructor', to: '/instructor', name: 'Kурсы' },
      {
         path: '',
         to: '',
         name: courseName,
      },
      {
         path: '',
         to: '',
         name: lastPath,
      },
   ]
}

export const setError = (state, { payload }) => {
   state.status = 'rejected'
   state.error = `Ошибка: ${payload}`
}

export const setLoading = (state) => {
   state.status = 'loading'
}

import { toast } from 'react-toastify'

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}
const showError = (message) => {
   toast.error(message, { position: 'top-right' })
}
export default showError

export const setError = (state, { payload }) => {
   state.status = 'rejected'
   state.error = payload
}

export const setLoading = (state) => {
   state.status = 'loading'
   state.error = null
}

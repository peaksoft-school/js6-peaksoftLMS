import { toast } from 'react-toastify'

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}
const showError = (message) => {
   toast.error(message, { position: 'top-right', hideProgressBar: true })
}
export default showError

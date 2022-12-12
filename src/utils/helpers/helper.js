import { toast } from 'react-toastify'

export const showSuccess = (message) => {
   toast.success(message, { position: 'top-right' })
}
const showError = (message) => {
   toast.error(message, { position: 'top-right', hideProgressBar: true })
}
export default showError

export const localStorageHelper = {
   laod(key) {
      const stored = localStorage.getItem(key)
      return stored == null ? undefined : JSON.parse(stored)
   },
   store(key, value) {
      localStorage.setItem(key, JSON.stringify(value))
   },
   clear(key) {
      localStorage.removeItem(key)
   },
}

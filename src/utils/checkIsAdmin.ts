import { LoginCheck } from '../interfaces'
import { checkAdminRole } from '../store/users/index'

//TODO delete mock data and move to effector
export const checkIsAdmin = ({ username, password }: LoginCheck) => {
  const currentUsername = 'admin'
  const currentPassword = 'admin'
  if (username === currentUsername && password === currentPassword) {
    checkAdminRole()
    return true
  }
}
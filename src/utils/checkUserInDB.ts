import { LoginCheck } from '../interfaces'
import { User } from '../types'

export const checkUserInDB = (users: User[], { username, password }: LoginCheck) =>
  users.some(user => user.username === username && user.password === password)

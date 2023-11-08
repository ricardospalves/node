import { api } from './api.service'

export type RegisterServiceArguments = {
  email: string
  password: string
}

export const loginService = ({ email, password }: RegisterServiceArguments) => {
  return api.post('/login', { email, password })
}

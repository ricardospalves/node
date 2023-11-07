import { api } from './api.service'

export type RegisterServiceArguments = {
  name: string
  email: string
  password: string
}

export const registerService = ({
  email,
  name,
  password,
}: RegisterServiceArguments) => {
  return api.post('/register', { email, name, password })
}

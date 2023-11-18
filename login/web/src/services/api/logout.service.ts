import { api } from './api.service'

export const logoutService = () => {
  return api.post('/logout')
}

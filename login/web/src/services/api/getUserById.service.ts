import { AxiosPromise } from 'axios'
import { api } from './api.service'

export type LoginServiceReturnData = {
  id: string
  email: string
  name: string
}

export const getUserById = (
  id: string,
): AxiosPromise<LoginServiceReturnData> => {
  return api.get(`/user/${id}`)
}

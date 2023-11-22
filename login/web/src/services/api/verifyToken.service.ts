import { AxiosPromise } from 'axios'
import { api } from './api.service'

export type VerifyTokenServiceReturnData = {
  message: string
}

export const verifyTokenService =
  (): AxiosPromise<VerifyTokenServiceReturnData> => {
    return api.post('/verify-token')
  }

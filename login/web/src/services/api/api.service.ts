import { API_BASE_URL } from '@/constants/config'
import axios from 'axios'

const isServer = typeof window === 'undefined'

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
})

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import('next/headers')
    const tokenCookie = cookies().get('token')

    if (tokenCookie?.value) {
      config.headers.Authorization = `Bearer ${tokenCookie.value}`
    }

    return config
  }

  return config
})

export { api }

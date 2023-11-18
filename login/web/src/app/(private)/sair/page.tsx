'use client'

import { logoutService } from '@/services/api/logout.service'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Logout() {
  const { push } = useRouter()

  useEffect(() => {
    const fetcher = async () => {
      await logoutService()
      push('/login')
    }

    fetcher()
  }, [push])

  return null
}

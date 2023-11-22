'use client'

import { logoutService } from '@/services/api/logout.service'
import { ReactNode, useEffect } from 'react'

export type PublicLayoutProps = {
  children: ReactNode
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  useEffect(() => {
    const fetcher = async () => {
      await logoutService()
    }

    fetcher()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div className="grow">{children}</div>
    </div>
  )
}

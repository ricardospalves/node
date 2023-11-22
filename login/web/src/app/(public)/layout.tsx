import { PublicLayout } from '@/layouts/public'
import { verifyTokenService } from '@/services/api/verifyToken.service'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  const tokenCookie = cookies().get('token')

  if (tokenCookie?.value) {
    const response = await verifyTokenService()
    const { status } = response

    if (status >= 200 && status <= 299) {
      return redirect('/')
    }

    await fetch('http://localhost:3333/logout', {
      method: 'POST',
    })
  }

  return <PublicLayout>{children}</PublicLayout>
}

import { PublicLayout } from '@/layouts/public'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'

export type LayoutProps = {
  children: ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  const tokenCookie = cookies().get('token')

  if (tokenCookie?.value) {
    const response = await fetch('http://localhost:3333/verify-token', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenCookie.value}`,
      },
    })

    if (response.ok) {
      return redirect('/')
    }

    await fetch('http://localhost:3333/logout', {
      method: 'POST',
    })
  }

  return <PublicLayout>{children}</PublicLayout>
}

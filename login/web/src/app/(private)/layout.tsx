import { Header } from '@/components/header/header'
import { ReactNode } from 'react'

export type PrivateLayoutProps = {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex flex-col grow">{children}</div>
    </div>
  )
}

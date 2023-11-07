import { ReactNode } from 'react'

export type PrivateLayoutProps = {
  children: ReactNode
}

export default function PrivateLayout({ children }: PrivateLayoutProps) {
  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>

      <div>{children}</div>
    </>
  )
}

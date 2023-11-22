import Link from 'next/link'
import { UserMenu } from './user-menu'

export const Header = () => {
  return (
    <header className="px-2 shrink-0 sticky top-0 border-b bg-black">
      <div className="flex items-center justify-between max-w-5xl w-full mx-auto">
        <Link href="/" className="flex items-center uppercase font-bold h-16">
          Logo
        </Link>

        <UserMenu />
      </div>
    </header>
  )
}

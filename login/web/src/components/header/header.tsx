import { UserMenu } from './user-menu'

export const Header = () => {
  return (
    <header className="p-2 shrink-0 sticky top-0 border-b">
      <div className="flex items-center justify-between max-w-5xl w-full mx-auto">
        <h1 className="uppercase font-bold">Logo</h1>

        <UserMenu />
      </div>
    </header>
  )
}

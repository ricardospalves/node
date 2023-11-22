import { UserCard } from './user-card/user-card'

export const ProfilePage = () => {
  return (
    <main className="w-full p-4">
      <h1 className="uppercase text-3xl font-bold text-center mb-8">Perfil</h1>

      <UserCard />
    </main>
  )
}

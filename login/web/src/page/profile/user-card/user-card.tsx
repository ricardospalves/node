import { getUserId } from '@/utils/get-user-id'
import { UserCardItem } from './user-card-item'
import { getUserById } from '@/services/api/getUserById.service'

export const UserCard = async () => {
  const userId = getUserId()

  if (!userId) {
    return null
  }

  const response = await getUserById(userId)
  const user = response.data

  if (!user) {
    return null
  }

  return (
    <div className="max-w-3xl mx-auto border rounded">
      <dl className="grid grid-cols-8 md:grid-cols-10 divide-y">
        <UserCardItem term="ID" description={user.id} />
        <UserCardItem term="Nome" description={user.name} />
        <UserCardItem term="E-mail" description={user.email} />
      </dl>
    </div>
  )
}

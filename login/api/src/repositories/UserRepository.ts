import { UserEntity } from '../entities/UserEntity'

export type GetUserByEmailReturn = Pick<models.User, 'email' | 'id' | 'name'>

export interface UserRepository {
  create(user: UserEntity): Promise<void>
  getUserByEmail(email: string): Promise<GetUserByEmailReturn | null>
}

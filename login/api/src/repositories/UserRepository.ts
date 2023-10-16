import { UserEntity } from '../entities/UserEntity'

export type GetUserByEmailReturn = Pick<models.User, 'email' | 'id' | 'name'>

export type LoginReturn = models.User

export interface UserRepository {
  create(user: UserEntity): Promise<void>
  getUserByEmail(email: string): Promise<GetUserByEmailReturn | null>
  login(
    email: models.User['email'],
    password: models.User['password'],
  ): Promise<LoginReturn | null>
}

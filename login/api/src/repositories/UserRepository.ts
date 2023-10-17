import { UserEntity } from '../entities/UserEntity'

export type GetUserByEmailReturn = Pick<models.User, 'email' | 'id' | 'name'>

export type LoginReturn = models.User

export type GetUserByIdReturn = Pick<models.User, 'email' | 'id' | 'name'>

export interface UserRepository {
  create(user: UserEntity): Promise<void>
  getUserByEmail(email: string): Promise<GetUserByEmailReturn | null>
  login(
    email: models.User['email'],
    password: models.User['password'],
  ): Promise<LoginReturn | null>
  getUserById(id: string): Promise<GetUserByIdReturn | null>
}

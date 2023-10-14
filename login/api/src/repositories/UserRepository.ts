import { UserEntity } from '../entities/UserEntity'

export interface UserRepository {
  create(user: UserEntity): Promise<void>
}

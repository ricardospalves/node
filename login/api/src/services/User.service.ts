import { UserEntity } from '../entities/UserEntity'
import { UserRepository } from '../repositories/UserRepository'

export class UserService {
  constructor(private userRepository: UserRepository) {}

  create(user: UserEntity) {
    return this.userRepository.create(user)
  }

  getUserById(id: string) {
    return this.userRepository.getUserById(id)
  }

  getUserByEmail(email: string) {
    return this.userRepository.getUserByEmail(email)
  }

  login(email: string) {
    return this.userRepository.login(email)
  }
}

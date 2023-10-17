import { UserRepository } from '../../repositories/UserRepository'

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) {}

  execute(id: string) {
    return this.userRepository.getUserById(id)
  }
}

import { UserEntity } from '../../entities/UserEntity'
import { UserRepository } from '../../repositories/UserRepository'
import { CreateUserDTO } from './CreateUser.dto'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserDTO) {
    const user = new UserEntity({
      email,
      name,
      password,
    })

    this.userRepository.create(user)
  }
}

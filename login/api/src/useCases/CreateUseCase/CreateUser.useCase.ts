import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { UserEntity } from '../../entities/UserEntity'
import { UserRepository } from '../../repositories/UserRepository'
import { CreateUserDTO } from './CreateUser.dto'

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute({ email, name, password }: CreateUserDTO) {
    const userAlreadyExists = await this.userRepository.getUserByEmail(email)

    if (userAlreadyExists) {
      throw new Error(RESPONSE_ERROR_MESSAGES.userAlreadyExists.id)
    }

    const user = new UserEntity({
      email,
      name,
      password,
    })

    this.userRepository.create(user)
  }
}

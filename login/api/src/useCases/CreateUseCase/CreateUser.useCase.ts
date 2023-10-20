import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { UserEntity } from '../../entities/UserEntity'
import { UserService } from '../../services/User.service'
import { CreateUserDTO } from './CreateUser.dto'

export class CreateUserUseCase {
  constructor(private userService: UserService) {}

  async execute({ email, name, password }: CreateUserDTO) {
    const userAlreadyExists = await this.userService.getUserByEmail(email)

    if (userAlreadyExists) {
      throw new Error(RESPONSE_ERROR_MESSAGES.userAlreadyExists.id)
    }

    const user = new UserEntity({
      email,
      name,
      password,
    })

    return this.userService.create(user)
  }
}

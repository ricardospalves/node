import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { UserRepository } from '../../repositories/UserRepository'

export class LoginUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email)

    if (!user) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
    }

    return await this.userRepository.login(email, password)
  }
}

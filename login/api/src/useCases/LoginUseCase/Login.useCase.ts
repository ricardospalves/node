import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { UserService } from '../../services/User.service'

export class LoginUseCase {
  constructor(private userService: UserService) {}

  async execute(email: string) {
    const user = await this.userService.getUserByEmail(email)

    if (!user) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
    }

    return await this.userService.login(email)
  }
}

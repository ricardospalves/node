import { UserService } from '../../services/User.service'

export class GetUserUseCase {
  constructor(private userService: UserService) {}

  execute(id: string) {
    return this.userService.getUserById(id)
  }
}

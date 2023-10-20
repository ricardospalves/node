import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { UserService } from '../../services/User.service'
import { LoginController } from './Login.controller'
import { LoginUseCase } from './Login.useCase'

const userRepository = new PrismaUserRepository()
const userService = new UserService(userRepository)
const loginUseCase = new LoginUseCase(userService)

export const loginController = new LoginController(loginUseCase)

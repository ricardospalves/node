import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { LoginController } from './Login.controller'
import { LoginUseCase } from './Login.useCase'

const userRepository = new PrismaUserRepository()
const loginUseCase = new LoginUseCase(userRepository)

export const loginController = new LoginController(loginUseCase)

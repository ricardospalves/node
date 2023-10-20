import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { UserService } from '../../services/User.service'
import { GetUserController } from './GetUser.controller'
import { GetUserUseCase } from './GetUser.useCase'

const userRepository = new PrismaUserRepository()
const userService = new UserService(userRepository)
const getUserUseCase = new GetUserUseCase(userService)

export const getUserController = new GetUserController(getUserUseCase)

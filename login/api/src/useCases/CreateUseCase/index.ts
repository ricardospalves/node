import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { UserService } from '../../services/User.service'
import { CreateUserController } from './CreateUser.controller'
import { CreateUserUseCase } from './CreateUser.useCase'

const userRepository = new PrismaUserRepository()
const userService = new UserService(userRepository)
const createUserUseCase = new CreateUserUseCase(userService)

export const createUserController = new CreateUserController(createUserUseCase)

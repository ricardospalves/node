import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { CreateUserController } from './CreateUser.controller'
import { CreateUserUseCase } from './CreateUser.useCase'

const userRepository = new PrismaUserRepository()
const createUserUseCase = new CreateUserUseCase(userRepository)

export const createUserController = new CreateUserController(createUserUseCase)

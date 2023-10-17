import { PrismaUserRepository } from '../../repositories/implements/PrismaUserRepository'
import { GetUserController } from './GetUser.controller'
import { GetUserUseCase } from './GetUser.useCase'

const userRepository = new PrismaUserRepository()
const getUserUseCase = new GetUserUseCase(userRepository)

export const getUserController = new GetUserController(getUserUseCase)

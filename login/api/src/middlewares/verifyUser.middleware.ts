import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import { z as zod } from 'zod'
import { RESPONSE_ERROR_MESSAGES } from '../constants/ResponseErrorMessages'
import { UserService } from '../services/User.service'
import { PrismaUserRepository } from '../repositories/implements/PrismaUserRepository'

const paramsSchema = zod.object({
  id: zod.string({ required_error: 'O id é obrigatório.' }),
})

export const userUserMiddleware = (
  request: FastifyRequest,
  response: FastifyReply,
  next: HookHandlerDoneFunction,
) => {
  const { id } = paramsSchema.parse(request.params)
  const userRepository = new PrismaUserRepository()
  const userService = new UserService(userRepository)

  userService
    .getUserById(id)
    .then((user) => {
      if (user) {
        request.user = user
      }
    })
    .catch(() => {
      throw new Error(RESPONSE_ERROR_MESSAGES.userNotFound.id)
    })
    .finally(() => {
      next()
    })
}

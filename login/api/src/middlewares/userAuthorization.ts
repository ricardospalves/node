import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import jwt from 'jsonwebtoken'
import { z as zod } from 'zod'
import { getBearerToken } from '../helpers/getBearerToken'
import { RESPONSE_ERROR_MESSAGES } from '../constants/ResponseErrorMessages'
import { UserService } from '../services/User.service'
import { PrismaUserRepository } from '../repositories/implements/PrismaUserRepository'

const paramsSchema = zod.object({
  id: zod.string({ required_error: 'O id é obrigatório.' }),
})

export const userAuthorizationMiddleware = (
  request: FastifyRequest,
  response: FastifyReply,
  next: HookHandlerDoneFunction,
) => {
  const bearerToken = getBearerToken(request.headers.authorization || '')

  if (!bearerToken) {
    throw new Error(RESPONSE_ERROR_MESSAGES.invalidToken.id)
  }

  const token = jwt.verify(bearerToken, process.env.SECRET_KEY!) as {
    id: string
    iat: number
  }
  const { id } = paramsSchema.parse(request.params)

  if (token.id !== id) {
    throw new Error(RESPONSE_ERROR_MESSAGES.unauthorizedUser.id)
  }

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

import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { GetUserUseCase } from './GetUser.useCase'
import { paramsSchema } from './schema'
import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { getBearerToken } from '../../helpers/getBearerToken'

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
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

    const user = await this.getUserUseCase.execute(id)

    if (!user) {
      throw new Error(RESPONSE_ERROR_MESSAGES.userNotFound.id)
    }

    return response.status(200).send(user)
  }
}

import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUserUseCase } from './GetUser.useCase'

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const { user } = request

    return response.status(200).send(user)
  }
}

import { FastifyReply, FastifyRequest } from 'fastify'

export class GetUserController {
  constructor() {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const { user } = request

    return response.status(200).send(user)
  }
}

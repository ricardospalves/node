import { FastifyReply, FastifyRequest } from 'fastify'

export class VerifyTokenController {
  handle(request: FastifyRequest, response: FastifyReply) {
    return response.status(204).send()
  }
}

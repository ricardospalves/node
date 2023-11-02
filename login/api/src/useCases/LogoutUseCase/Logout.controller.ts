import { FastifyReply, FastifyRequest } from 'fastify'
import { COOKIES } from '../../constants/cookies'

const COOKIE_TOKEN = COOKIES.token

export class LogoutController {
  handle(request: FastifyRequest, response: FastifyReply) {
    response.setCookie(COOKIE_TOKEN.name, 'deleted', {
      maxAge: 0,
    })

    return response.status(200).send({
      message: 'Conta desconectada.',
    })
  }
}

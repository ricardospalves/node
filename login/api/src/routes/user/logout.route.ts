import { FastifyInstance } from 'fastify'
import { logoutController } from '../../useCases/LogoutUseCase'

export const logoutRoute = async (app: FastifyInstance) => {
  return app.post(
    '/logout',
    async (response, reply) => await logoutController.handle(response, reply),
  )
}

import { FastifyInstance } from 'fastify'
import { loginController } from '../../useCases/LoginUseCase'

export const loginRoute = async (app: FastifyInstance) => {
  return app.post(
    '/login',
    async (response, reply) => await loginController.handle(response, reply),
  )
}

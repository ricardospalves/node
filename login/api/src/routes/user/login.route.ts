import { FastifyInstance } from 'fastify'
import { loginController } from '../../useCases/LoginUseCase'

export const loginRoute = async (app: FastifyInstance) => {
  return app.post(
    '/login',
    async (request, response) =>
      await loginController.handle(request, response),
  )
}

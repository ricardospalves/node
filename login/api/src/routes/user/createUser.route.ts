import { FastifyInstance } from 'fastify'
import { createUserController } from '../../useCases/CreateUseCase'

export const createUserRoute = async (app: FastifyInstance) => {
  return app.post(
    '/register',
    async (request, response) =>
      await createUserController.handle(request, response),
  )
}

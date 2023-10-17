import { FastifyInstance } from 'fastify'
import { getUserController } from '../../useCases/GetUserUseCase'

export const getUserRoute = async (app: FastifyInstance) => {
  return app.get(
    '/user/:id',
    async (response, reply) => await getUserController.handle(response, reply),
  )
}

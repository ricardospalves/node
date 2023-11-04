import { FastifyInstance } from 'fastify'
import { getUserController } from '../../useCases/GetUserUseCase'
import { verifyTokenMiddleware } from '../../middlewares/verifyToken.middleware'
import { userUserMiddleware } from '../../middlewares/verifyUser.middleware'

export const getUserRoute = async (app: FastifyInstance) => {
  return app.get(
    '/user/:id',
    {
      preHandler: [verifyTokenMiddleware, userUserMiddleware],
    },
    async (response, reply) => await getUserController.handle(response, reply),
  )
}

import { FastifyInstance } from 'fastify'
import { getUserController } from '../../useCases/GetUserUseCase'
import { verifyTokenMiddleware } from '../../middlewares/verifyToken.middleware'
import { verifyUserMiddleware } from '../../middlewares/verifyUser.middleware'

export const getUserRoute = async (app: FastifyInstance) => {
  return app.get(
    '/user/:id',
    {
      preHandler: [verifyTokenMiddleware, verifyUserMiddleware],
    },
    async (response, reply) => await getUserController.handle(response, reply),
  )
}

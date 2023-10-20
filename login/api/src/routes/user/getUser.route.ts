import { FastifyInstance } from 'fastify'
import { getUserController } from '../../useCases/GetUserUseCase'
import { userAuthorizationMiddleware } from '../../middlewares/userAuthorization'

export const getUserRoute = async (app: FastifyInstance) => {
  return app.get(
    '/user/:id',
    {
      preHandler: [userAuthorizationMiddleware],
    },
    async (response, reply) => await getUserController.handle(response, reply),
  )
}

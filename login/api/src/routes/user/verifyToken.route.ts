import { FastifyInstance } from 'fastify'
import { verifyTokenMiddleware } from '../../middlewares/verifyToken.middleware'
import { verifyTokenController } from '../../useCases/VerifyToken'

export const verifyTokenRoute = async (app: FastifyInstance) => {
  return app.post(
    '/verify-token',
    {
      preHandler: [verifyTokenMiddleware],
    },
    async (response, reply) =>
      await verifyTokenController.handle(response, reply),
  )
}

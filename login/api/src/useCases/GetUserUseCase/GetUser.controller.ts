import { FastifyReply, FastifyRequest } from 'fastify'
import { GetUserUseCase } from './GetUser.useCase'
import { paramsSchema } from './schema'
import {
  RESPONSE_ERROR_MESSAGES,
  ResponseErrorMessagesKeys,
} from '../../constants/ResponseErrorMessages'
import { parseZodIssues } from '../../helpers/parseZodIssues'
import { ZodError } from 'zod'

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { id } = paramsSchema.parse(request.params)
      const user = await this.getUserUseCase.execute(id)

      if (!user) {
        return response
          .status(RESPONSE_ERROR_MESSAGES.userNotFound.statusCode)
          .send({
            message: RESPONSE_ERROR_MESSAGES.userNotFound.message,
          })
      }

      return response.status(200).send(user)
    } catch (exception) {
      if (exception instanceof ZodError) {
        return response.status(422).send({
          message: 'Há campos com erros.',
          errors: parseZodIssues(exception),
        })
      }

      if (exception instanceof Error) {
        if (exception.message in RESPONSE_ERROR_MESSAGES) {
          const ERROR =
            RESPONSE_ERROR_MESSAGES[
              exception.message as ResponseErrorMessagesKeys
            ]

          return response.status(ERROR.statusCode).send({
            message: ERROR.message,
          })
        }
      }

      return response
        .status(RESPONSE_ERROR_MESSAGES.internalServerError.statusCode)
        .send({
          message: RESPONSE_ERROR_MESSAGES.internalServerError.message,
        })
    }
  }
}

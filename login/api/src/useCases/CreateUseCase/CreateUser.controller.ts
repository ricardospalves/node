import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import { CreateUserUseCase } from './CreateUser.useCase'
import { paramsSchema } from './schema'
import { parseZodIssues } from '../../helpers/parseZodIssues'
import {
  RESPONSE_ERROR_MESSAGES,
  ResponseErrorMessagesKeys,
} from '../../constants/ResponseErrorMessages'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { email, name, password } = paramsSchema.parse(request.body)

      await this.createUserUseCase.execute({ email, name, password })

      return response.status(201).send({
        message: 'Usuário criado com sucesso.',
      })
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

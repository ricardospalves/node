import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { LoginUseCase } from './Login.useCase'
import { paramsSchema } from './schema'
import {
  RESPONSE_ERROR_MESSAGES,
  ResponseErrorMessagesKeys,
} from '../../constants/ResponseErrorMessages'
import { parseZodIssues } from '../../helpers/parseZodIssues'

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { email, password } = paramsSchema.parse(request.body)
      const user = await this.loginUseCase.execute(email, password)

      if (!user) {
        throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
      }

      const passwordMatch = await bcrypt.compare(password, user.password)

      if (passwordMatch === false) {
        throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
      }

      const userWithoutPassword = {
        email: user.email,
        id: user.id,
        name: user.email,
      }

      const secretKey = process.env.SECRET_KEY!
      const token = jwt.sign(
        {
          id: userWithoutPassword.id,
        },
        secretKey,
      )

      return response.status(200).send({
        message: 'Autenticação relaizada com sucesso.',
        user: userWithoutPassword,
        token,
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

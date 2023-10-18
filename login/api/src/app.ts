import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { createUserRoute } from './routes/user/createUser.route'
import { loginRoute } from './routes/user/login.route'
import { getUserRoute } from './routes/user/getUser.route'
import {
  RESPONSE_ERROR_MESSAGES,
  ResponseErrorMessagesKeys,
} from './constants/ResponseErrorMessages'
import { ZodError } from 'zod'
import { parseZodIssues } from './helpers/parseZodIssues'
import { JsonWebTokenError } from 'jsonwebtoken'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.setErrorHandler((exception, request, response) => {
  if (exception instanceof ZodError) {
    return response.status(422).send({
      message: 'Há campos com erros.',
      errors: parseZodIssues(exception),
    })
  }

  if (exception instanceof JsonWebTokenError) {
    return response
      .status(RESPONSE_ERROR_MESSAGES.invalidToken.statusCode)
      .send({
        message: RESPONSE_ERROR_MESSAGES.invalidToken.message,
      })
  }

  if (exception instanceof Error) {
    if (exception.message in RESPONSE_ERROR_MESSAGES) {
      const ERROR =
        RESPONSE_ERROR_MESSAGES[exception.message as ResponseErrorMessagesKeys]
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
})

app.register(createUserRoute)
app.register(loginRoute)
app.register(getUserRoute)

export { app }

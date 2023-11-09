import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyCookie } from '@fastify/cookie'
import { fastifyFormbody } from '@fastify/formbody'
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
import { ENV } from './constants/env'
import { logoutRoute } from './routes/user/logout.route'
import { verifyTokenRoute } from './routes/user/verifyToken.route'

const app = fastify()

app.register(fastifyFormbody)

app.register(fastifyCors, {
  origin: true,
  credentials: true,
})

app.register(fastifyCookie, {
  secret: ENV.COOKIE_SECRET_KEY,
  parseOptions: {
    path: '/',
    httpOnly: true,
    secure: false,
    signed: true,
  },
})

app.setErrorHandler((exception, request, response) => {
  if (exception instanceof ZodError) {
    return response.status(422).send({
      error: true,
      message: 'Há campos com erros.',
      fieldErrors: parseZodIssues(exception),
    })
  }

  if (exception instanceof JsonWebTokenError) {
    return response
      .status(RESPONSE_ERROR_MESSAGES.invalidToken.statusCode)
      .send({
        error: true,
        message: RESPONSE_ERROR_MESSAGES.invalidToken.message,
      })
  }

  if (exception instanceof Error) {
    if (exception.message in RESPONSE_ERROR_MESSAGES) {
      const ERROR =
        RESPONSE_ERROR_MESSAGES[exception.message as ResponseErrorMessagesKeys]

      return response.status(ERROR.statusCode).send({
        error: true,
        message: ERROR.message,
      })
    }
  }

  return response
    .status(RESPONSE_ERROR_MESSAGES.internalServerError.statusCode)
    .send({
      error: true,
      message: RESPONSE_ERROR_MESSAGES.internalServerError.message,
    })
})

app.register(createUserRoute)
app.register(loginRoute)
app.register(getUserRoute)
app.register(logoutRoute)
app.register(verifyTokenRoute)

export { app }

import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyCookie } from '@fastify/cookie'
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

const app = fastify()

app.register(fastifyCors, {
  origin: true,
  credentials: true,
})

app.register(fastifyCookie, {
  secret: ENV.COOKIE_SECRET_KEY,
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

app.register((fastifyInstance) => {
  return fastifyInstance.get('/default', (request, response) => {
    return response
      .headers({
        'Content-Type': 'text/html',
      })
      .send(
        `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
<body>
  <script>
    (function() {
      'use strict'

      fetch('http://localhost:3333/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: 'lorem@ipsum.dolor',
          password: '12345678'
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    })()
  </script>
</body>
</html>
        `,
      )
  })
})
app.register(createUserRoute)
app.register(loginRoute)
app.register(getUserRoute)

export { app }

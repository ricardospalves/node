import { FastifyReply, FastifyRequest, HookHandlerDoneFunction } from 'fastify'
import jwt from 'jsonwebtoken'
import { getBearerToken } from '../helpers/getBearerToken'
import { RESPONSE_ERROR_MESSAGES } from '../constants/ResponseErrorMessages'
import { ENV } from '../constants/env'

type JWTPayload = {
  id: string
  iat: number
}

export const verifyTokenMiddleware = (
  request: FastifyRequest,
  response: FastifyReply,
  next: HookHandlerDoneFunction,
) => {
  try {
    const bearerToken = getBearerToken(request.headers.authorization || '')

    if (!bearerToken) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidToken.id)
    }

    const unsignBearerToken = request.unsignCookie(bearerToken)

    if (!unsignBearerToken.valid) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidToken.id)
    }

    const token = jwt.verify(
      unsignBearerToken.value as string,
      ENV.SECRET_KEY,
    ) as JWTPayload

    request.user = {
      id: token.id,
    }

    next()
  } catch {
    throw new Error(RESPONSE_ERROR_MESSAGES.invalidToken.id)
  }
}

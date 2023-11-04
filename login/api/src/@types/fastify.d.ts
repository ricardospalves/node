import { FastifyRequest as FastifyOriginalRequest } from 'fastify'

declare module 'fastify' {
  interface FastifyRequest extends FastifyOriginalRequest {
    user?: {
      id?: string
      name?: string
      email?: string
    }
  }
}

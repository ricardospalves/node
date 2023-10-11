import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.get('/api', (request, reply) => {
  return reply.status(200).send({
    message: 'Hello World!',
  })
})

export { app }

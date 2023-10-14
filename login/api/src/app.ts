import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { createUserRoute } from './routes/user/createUser.route'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(createUserRoute)

export { app }

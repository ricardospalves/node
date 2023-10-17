import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { createUserRoute } from './routes/user/createUser.route'
import { loginRoute } from './routes/user/login.route'
import { getUserRoute } from './routes/user/getUser.route'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

app.register(createUserRoute)
app.register(loginRoute)
app.register(getUserRoute)

export { app }

import { FastifyReply, FastifyRequest } from 'fastify'
import bcrypt from 'bcrypt'
import { CreateUserUseCase } from './CreateUser.useCase'
import { paramsSchema } from './schema'

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const { email, name, password } = paramsSchema.parse(request.body)

    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    await this.createUserUseCase.execute({
      email,
      name,
      password: passwordHash,
    })

    return response.status(201).send({
      message: 'Usuário criado com sucesso.',
    })
  }
}

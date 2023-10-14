import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from './CreateUser.useCase'

type RequestBodyData = Pick<models.User, 'email' | 'name' | 'password'>

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const { email, name, password } = request.body as RequestBodyData

    await this.createUserUseCase.execute({ email, name, password })

    response.status(201).send({
      message: 'Usuário criado com sucesso.',
    })
  }
}

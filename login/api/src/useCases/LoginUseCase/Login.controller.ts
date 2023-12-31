import { FastifyReply, FastifyRequest } from 'fastify'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { LoginUseCase } from './Login.useCase'
import { paramsSchema } from './schema'
import { RESPONSE_ERROR_MESSAGES } from '../../constants/ResponseErrorMessages'
import { ENV } from '../../constants/env'
import { COOKIES } from '../../constants/cookies'

const COOKIE_TOKEN = COOKIES.token

export class LoginController {
  constructor(private loginUseCase: LoginUseCase) {}

  async handle(request: FastifyRequest, response: FastifyReply) {
    const { email, password } = paramsSchema.parse(request.body)
    const user = await this.loginUseCase.execute(email)

    if (!user) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (passwordMatch === false) {
      throw new Error(RESPONSE_ERROR_MESSAGES.invalidUser.id)
    }

    const userWithoutPassword = {
      email: user.email,
      id: user.id,
      name: user.email,
    }

    const token = jwt.sign(
      {
        id: userWithoutPassword.id,
      },
      ENV.SECRET_KEY,
      {
        expiresIn: COOKIE_TOKEN.maxAge,
      },
    )

    response.setCookie(COOKIE_TOKEN.name, token, {
      maxAge: COOKIE_TOKEN.maxAge,
    })

    return response.status(200).send({
      message: 'Autenticação realizada com sucesso.',
      user: userWithoutPassword,
      token,
    })
  }
}

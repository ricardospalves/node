import { Request, Response } from 'express'
import { CreateBookUserCase } from './UserCase'

type RequestBodyData = {
  name: string
  author: string
  publishYear: number
}

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUserCase) {}

  async handle(request: Request, response: Response) {
    const { author, name, publishYear } = request.body as RequestBodyData

    await this.createBookUseCase.execute({
      author,
      name,
      publishYear,
    })

    return response.status(201).json({
      message: 'Livro cadastrado com sucesso.',
    })
  }
}

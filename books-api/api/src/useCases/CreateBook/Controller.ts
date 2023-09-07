import { Request, Response } from 'express'
import { CreateBookUserCase } from './UserCase'

type RequestBodyData = {
  name: string
  authorId: string
  publishYear: number
}

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUserCase) {}

  async handle(request: Request, response: Response) {
    const { authorId, name, publishYear } = request.body as RequestBodyData

    try {
      await this.createBookUseCase.execute({
        authorId,
        name,
        publishYear,
      })

      return response.status(201).json({
        message: 'Livro cadastrado com sucesso.',
      })
    } catch (error) {
      console.error({
        message: (error as Error)?.message,
        error,
      })

      response.status(500).json({
        message: 'Ocorreu um erro desconhecido.',
      })
    }
  }
}

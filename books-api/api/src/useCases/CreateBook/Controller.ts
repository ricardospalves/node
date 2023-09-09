import { Request, Response } from 'express'
import { CreateBookUseCase } from './UseCase'

type RequestBodyData = {
  name: string
  author: string
  publishYear: number
}

export class CreateBookController {
  constructor(private createBookUseCase: CreateBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { author, name, publishYear } = request.body as RequestBodyData

    try {
      await this.createBookUseCase.execute({
        author,
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

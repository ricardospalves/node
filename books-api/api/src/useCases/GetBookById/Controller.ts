import { Request, Response } from 'express'
import { GetBookByIdUseCase } from './UseCase'

type RequestParams = {
  id: string
}

export class GetBookByIdController {
  constructor(private getBookByIdUseCase: GetBookByIdUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params as RequestParams

    try {
      const book = await this.getBookByIdUseCase.execute(id)

      if (!book) {
        return response.status(404).json({
          message: 'Livro não encontrado.',
        })
      }

      return response.status(200).json(book)
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

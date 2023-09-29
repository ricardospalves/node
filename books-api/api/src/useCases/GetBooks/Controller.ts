import { Request, Response } from 'express'
import { GetBooksUseCase } from './UseCase'

export class GetBooksController {
  constructor(private getBooksUseCase: GetBooksUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const books = await this.getBooksUseCase.execute()

      return response.status(200).json(books)
    } catch (error) {
      console.error({
        message: (error as Error)?.message,
        error,
      })

      response.status(500).json({
        error: true,
        message: 'Ocorreu um erro desconhecido.',
      })
    }
  }
}

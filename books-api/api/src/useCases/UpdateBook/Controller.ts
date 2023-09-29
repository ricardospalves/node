import { Request, Response } from 'express'
import { UpdateBookUseCase } from './UseCase'

type RequestParams = {
  id: string
}

type RequestBodyData = {
  name?: string
  author?: string
  publishYear?: number
}

export class UpdateBookController {
  constructor(private updateBookUseCase: UpdateBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params as RequestParams
    const { author, name, publishYear } = request.body as RequestBodyData

    try {
      const updatedBook = await this.updateBookUseCase.execute({
        id,
        author,
        name,
        publishYear,
      })

      if (!updatedBook) {
        return response.status(404).json({
          message: 'O livro não pôde ser atualizado pois ele não existe.',
          book: updatedBook,
        })
      }

      return response.status(200).json({
        message: 'Book updated.',
        book: updatedBook,
      })
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

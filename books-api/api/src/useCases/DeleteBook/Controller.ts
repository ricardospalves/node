import { Request, Response } from 'express'
import { DeleteBookUseCase } from './UseCase'

type RequestParams = {
  id: string
}

export class DeleteBookController {
  constructor(private deleteBookUseCase: DeleteBookUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params as RequestParams

    try {
      const { deletedBooks } = await this.deleteBookUseCase.execute(id)

      if (!deletedBooks) {
        return response.status(404).json({
          error: true,
          message: 'O livro não pôde ser deletado pois ele não existe.',
        })
      }

      return response.status(200).json({
        message: 'Livro deletado com sucesso.',
      })
    } catch (error) {
      console.error({
        message: (error as Error)?.message,
        error,
      })

      return response.status(500).json({
        error: true,
        message: 'Ocorreu um erro desconhecido.',
      })
    }
  }
}

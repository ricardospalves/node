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
      await this.deleteBookUseCase.execute(id)

      return response.status(200).end()
    } catch (error) {
      console.error({
        message: (error as Error)?.message,
        error,
      })

      return response.status(500).json({
        message: 'Ocorreu um erro desconhecido.',
      })
    }
  }
}

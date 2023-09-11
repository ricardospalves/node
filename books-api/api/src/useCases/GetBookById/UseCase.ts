import { IBooksRepository } from '../../repositories/IBooksRepository'

export class GetBookByIdUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    return await this.booksRepository.findBookById(id)
  }
}

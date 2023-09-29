import { IBooksRepository } from '../../repositories/IBooksRepository'

export class DeleteBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute(id: string) {
    return await this.booksRepository.deleteBook(id)
  }
}

import { IBooksRepository } from '../../repositories/IBooksRepository'

export class GetBooksUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute() {
    return await this.booksRepository.books()
  }
}

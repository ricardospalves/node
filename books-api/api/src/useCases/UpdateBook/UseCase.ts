import { IBooksRepository } from '../../repositories/IBooksRepository'
import { IUpdateBookDTO } from './DTO'

export class UpdateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ author, id, name, publishYear }: IUpdateBookDTO) {
    const updatedBook = await this.booksRepository.updateBook(id, {
      author,
      name,
      publishYear,
    })

    return updatedBook
  }
}

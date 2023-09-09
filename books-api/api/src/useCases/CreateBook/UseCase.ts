import { Book } from '../../entities/Book'
import { IBooksRepository } from '../../repositories/IBooksRepository'
import { ICreateBookDTO } from './DTO'

export class CreateBookUseCase {
  constructor(private booksRepository: IBooksRepository) {}

  async execute({ author, name, publishYear }: ICreateBookDTO) {
    const book = new Book({
      author,
      name,
      publishYear,
    })

    await this.booksRepository.save(book)
  }
}

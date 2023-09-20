import { Book } from '../entities/Book'

export interface IBooksRepository {
  save(book: Book): Promise<void>
  findBooks(): Promise<Book[]>
  findBookById(id: string): Promise<Book>
  updateBook(id: string, book: Partial<Omit<Book, 'id'>>): Promise<Book>
}

import { Book } from '../../../entities/Book'
import { IBooksRepository } from '../../IBooksRepository'
import { pool } from '../../../database/mysql/MySQLDatabase'

export class MySQLBooksRepository implements IBooksRepository {
  async save(book: Book): Promise<void> {
    try {
      await pool.query(
        `INSERT INTO books (id, name, author, publishYear) values ("${book.id}", "${book.name}", "${book.author}", ${book.publishYear})`,
      )
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }
}

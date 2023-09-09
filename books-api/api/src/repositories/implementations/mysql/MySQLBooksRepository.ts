import { Connection } from 'mysql2/promise'

import { Book } from '../../../entities/Book'
import { IBooksRepository } from '../../IBooksRepository'
import { MySQLDatabase } from '../../../database/mysql/MySQLDatabase'

export class MySQLBooksRepository implements IBooksRepository {
  private database: Connection

  constructor() {
    this.database = new MySQLDatabase().database!
  }

  async save(book: Book): Promise<void> {
    try {
      await this.database.query(
        `INSERT INTO books (id, name, author, publishYear) values ("${book.id}", "${book.name}", "${book.author}", ${book.publishYear})`,
      )
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }
}

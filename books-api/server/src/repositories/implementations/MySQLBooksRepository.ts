import { createConnection, Connection } from 'mysql2/promise'

import { Book } from '../../entities/Book'
import { IBooksRepository } from '../IBooksRepository'

export class MySQLBooksRepository implements IBooksRepository {
  database?: Connection

  constructor() {
    this.#connect()
  }

  async #connect() {
    this.database = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    })
  }

  async save(book: Book): Promise<void> {
    this.database?.query(
      `INSERT INTO books (id, name, author, publishYear) values ("${book.id}", "${book.name}", "${book.author}", ${book.publishYear})`,
    )
  }
}

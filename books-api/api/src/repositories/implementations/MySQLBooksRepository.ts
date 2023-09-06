import { createConnection, Connection } from 'mysql2/promise'

import { Book } from '../../entities/Book'
import { IBooksRepository } from '../IBooksRepository'

export class MySQLBooksRepository implements IBooksRepository {
  database?: Connection

  constructor() {
    this.#connect()
  }

  async #connect() {
    const connection = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    })

    connection.query(`
      CREATE TABLE IF NOT EXISTS books(
        id varchar(50) not null,
        name varchar(255) not null,
        author varchar(255) not null,
        publishYear int not null,
        primary key (id)
      )
    `)

    this.database = connection
  }

  async save(book: Book): Promise<void> {
    try {
      await this.database?.query(
        `INSERT INTO books (id, name, author, publishYear) values ("${book.id}", "${book.name}", "${book.author}", ${book.publishYear})`,
      )
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }
}

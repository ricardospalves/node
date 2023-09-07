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
      CREATE TABLE IF NOT EXISTS author(
        id varchar(50) NOT NULL,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
      )
    `)

    connection.query(`
      CREATE TABLE IF NOT EXISTS books(
        id varchar(50) NOT NULL,
        name varchar(255) NOT NULL,
        publishYear INT NOT NULL,
        PRIMARY KEY (id),
        CONSTRAINT authorId FOREIGN KEY (id) REFERENCES author(id)
      )
    `)

    this.database = connection
  }

  async save(book: Book): Promise<void> {
    try {
      await this.database?.query(
        `INSERT INTO books (id, name, authorId, publishYear) values ("${book.id}", "${book.name}", "${book.authorId}", ${book.publishYear})`,
      )
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }
}

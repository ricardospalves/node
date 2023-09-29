import { ResultSetHeader } from 'mysql2'
import { Book } from '../../../entities/Book'
import { DeleteBookReturn, IBooksRepository } from '../../IBooksRepository'
import { pool } from '../../../database/mysql/MySQLDatabase'

export class MySQLBooksRepository implements IBooksRepository {
  async findBooks(): Promise<Book[]> {
    try {
      const [rows] = await pool.query(`SELECT * FROM books`)

      return rows as Book[]
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }

  async save(book: Book): Promise<void> {
    try {
      await pool.query(
        `INSERT INTO books (id, name, author, publishYear) values ("${book.id}", "${book.name}", "${book.author}", ${book.publishYear})`,
      )
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }

  async findBookById(id: string): Promise<Book> {
    try {
      const [rows] = await pool.query(`SELECT * FROM books WHERE id="${id}"`)
      const book = (rows as Book[])[0]

      return book
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }

  async updateBook(id: string, book: Partial<Omit<Book, 'id'>>): Promise<Book> {
    try {
      const { author, name, publishYear } = book
      const query =
        'UPDATE books SET `name` = COALESCE(?, name), `publishYear` = COALESCE(?, publishYear), `author` = COALESCE(?, author) WHERE `id` = ?'
      await pool.query(query, [name, publishYear, author, id])
      const [rows] = await pool.query(`SELECT * FROM books WHERE id = "${id}"`)
      const updatedBook = (rows as Book[])[0]

      return updatedBook
    } catch (error) {
      throw new Error((error as Error)?.message)
    }
  }

  async deleteBook(id: string): Promise<DeleteBookReturn> {
    try {
      const response = await pool.query(`DELETE FROM books WHERE id="${id}"`)
      const rows = response[0] as ResultSetHeader

      return {
        deletedBooks: rows.affectedRows,
      }
    } catch (error) {
      console.log('error')
      throw new Error((error as Error)?.message)
    }
  }
}

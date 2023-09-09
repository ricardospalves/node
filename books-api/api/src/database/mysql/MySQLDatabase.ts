import { createConnection, Connection } from 'mysql2/promise'

export class MySQLDatabase {
  #database?: Connection

  async connection() {
    const database = await createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
    })

    await this.#createTables(database)

    this.setDatabase(database)

    return database
  }

  async #createTables(database: Connection) {
    await database.query(`
      CREATE TABLE IF NOT EXISTS books(
        id varchar(50) NOT NULL,
        name varchar(255) NOT NULL,
        publishYear INT NOT NULL,
        author varchar(255) NOT NULL,
        PRIMARY KEY (id)
      )
    `)
  }

  get database() {
    return this.#database
  }

  setDatabase(database: Connection) {
    this.#database = database
  }
}

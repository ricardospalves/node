import './dotenvConfig'

import { app } from './app'
import { MySQLDatabase } from './database/mysql/MySQLDatabase'

const database = new MySQLDatabase()

const PORT = 8080

database
  .connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error({ message: 'Database connection error.', error })
  })

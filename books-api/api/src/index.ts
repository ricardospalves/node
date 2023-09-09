import './dotenvConfig'

import { app } from './app'
import { pool } from './database/mysql/MySQLDatabase'

const PORT = 8080

pool
  .getConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 server running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.error({ message: 'Database connection error.', error })
  })

import { join } from 'node:path'

import { ACCOUNTS_PATH } from './accountsPath.js'

export const accountJoinPath = (accountName) => {
  return join(ACCOUNTS_PATH, `${accountName}.json`)
}

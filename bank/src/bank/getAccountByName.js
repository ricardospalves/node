import { readFile } from 'node:fs/promises'

import { accountExists } from './accountExists.js'
import { customError } from '../utils/customError.js'
import { accountJoinPath } from './accountJoinPath.js'

export const getAccountByName = async (accountName) => {
  if (!(await accountExists(accountName))) {
    customError('Essa conta não existe.')
  }

  const accountContent = await readFile(accountJoinPath(accountName), {
    encoding: 'utf-8',
  })
  const accountData = JSON.parse(accountContent)

  return accountData
}

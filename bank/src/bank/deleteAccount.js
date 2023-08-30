import { unlink } from 'node:fs/promises'

import { accountExists } from './accountExists.js'
import { customError } from '../utils/customError.js'
import { accountJoinPath } from './accountJoinPath.js'

export const deleteAccount = async (accountName) => {
  if ((await accountExists(accountName)) === false) {
    customError('Essa conta já existe.')
  }

  const accountPath = accountJoinPath(accountName)

  await unlink(accountPath)
}

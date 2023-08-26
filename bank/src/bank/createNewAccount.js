import { access, writeFile, mkdir } from 'node:fs/promises'
import { accountExists } from './accountExists.js'
import { customError } from '../utils/customError.js'
import { accountJoinPath } from './accountJoinPath.js'
import { ACCOUNTS_PATH } from './accountsPath.js'

export const createNewAccount = async (accountName) => {
  if (await accountExists(accountName)) {
    customError('Essa conta já existe.')
  }

  try {
    await access(ACCOUNTS_PATH)
  } catch {
    await mkdir(ACCOUNTS_PATH)
  }

  await writeFile(
    accountJoinPath(accountName),
    JSON.stringify({ name: accountName, balance: 0 }),
    {
      encoding: 'utf-8',
    },
  )
}

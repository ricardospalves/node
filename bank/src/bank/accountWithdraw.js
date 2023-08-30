import { writeFile } from 'node:fs/promises'

import { getAccountByName } from './getAccountByName.js'
import { accountJoinPath } from './accountJoinPath.js'
import { customError } from '../utils/customError.js'

export const accountWithdraw = async (accountName, value) => {
  value = parseFloat(value)

  if (isNaN(value)) {
    customError('Apenas números são permitidos.')
  }

  if (value < 0) {
    customError('Apenas valores positivos acima de zero são permitidos.')
  }

  const account = await getAccountByName(accountName)
  const accountPath = accountJoinPath(accountName)

  if (value > account.balance) {
    customError('Você não tem saldo suficiente para este saque.')
  }

  account.balance -= value

  await writeFile(accountPath, JSON.stringify(account), { encoding: 'utf-8' })
}

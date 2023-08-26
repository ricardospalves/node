import chalk from 'chalk'

import { getAccountBalance } from '../bank/getAccountBalance.js'

export const accountBalance = async (appReference) => {
  const balance = await getAccountBalance(appReference.accountName)

  console.log(
    chalk.blue('Seu saldo atual é de:', chalk.bold(`R$ ${balance}`)),
    '\n',
  )

  appReference.account()
}

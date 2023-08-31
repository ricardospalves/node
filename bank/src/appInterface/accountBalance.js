import chalk from 'chalk'

import { getAccountBalance } from '../bank/getAccountBalance.js'
import { accountController } from '../accountController/index.js'
import { account } from './account.js'

export const accountBalance = async () => {
  const balance = await getAccountBalance(accountController.currentAccount)

  console.log(
    chalk.blue('Seu saldo atual é de:', chalk.bold(`R$ ${balance}`)),
    '\n',
  )

  account()
}

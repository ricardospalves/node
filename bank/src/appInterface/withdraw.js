import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountWithdraw } from '../bank/accountWithdraw.js'
import { formatCurrency } from '../utils/formatCurrency.js'
import { accountController } from '../accountController/index.js'
import { account } from './account.js'
import { exit } from './exit.js'

export const withdraw = async () => {
  const withdrawValue = await input({ message: 'Quanto você quer sacar?' })

  try {
    await accountWithdraw(accountController.currentAccount, withdrawValue)

    console.log(
      chalk.green(`💸 Você sacou ${chalk.bold(formatCurrency(withdrawValue))}`),
    )

    account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message))
      account()
      return
    }

    console.log(chalk.red('🛑', error.message))
    exit()
  }
}

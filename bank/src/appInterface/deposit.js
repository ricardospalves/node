import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountDeposit } from '../bank/accountDeposit.js'
import { formatCurrency } from '../utils/formatCurrency.js'
import { accountController } from '../accountController/index.js'
import { account } from './account.js'
import { exit } from './exit.js'

export const deposit = async () => {
  const depositValue = await input({ message: 'Quanto você quer depositar?' })

  try {
    await accountDeposit(accountController.currentAccount, depositValue)

    console.log(
      chalk.green(
        `💰 Você depositou ${chalk.bold(formatCurrency(depositValue))}`,
      ),
    )

    account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message, '\n'))
      account()
      return
    }

    console.log(chalk.red('🛑', error.message, '\n'))
    exit()
  }
}

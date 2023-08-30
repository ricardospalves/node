import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountWithdraw } from '../bank/accountWithdraw.js'
import { formatCurrency } from '../utils/formatCurrency.js'

export const withdraw = async (appReference) => {
  const withdrawValue = await input({ message: 'Quanto você quer sacar?' })

  try {
    await accountWithdraw(appReference.accountName, withdrawValue)

    console.log(
      chalk.green(`💸 Você sacou ${chalk.bold(formatCurrency(withdrawValue))}`),
    )

    appReference.account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message, '\n'))
      appReference.account()
      return
    }

    console.log(chalk.red('🛑', error.message, '\n'))
    appReference.exit()
  }
}

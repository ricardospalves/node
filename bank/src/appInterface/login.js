import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountExists } from '../bank/index.js'

export const login = async (appReference) => {
  const accountName = await input({
    message: 'Qual é o nome da conta?',
  })
  const isAccountExists = await accountExists(accountName)

  if (isAccountExists === false) {
    console.log(chalk.red('🛑 Esta conta não existe\n'))

    appReference.init()

    return
  }

  appReference.setAccountName(accountName)

  appReference.account()
}

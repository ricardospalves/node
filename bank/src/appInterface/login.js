import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountExists } from '../bank/index.js'
import { accountController } from '../accountController/index.js'
import { init } from './init.js'
import { account } from './account.js'

export const login = async () => {
  const accountName = await input({
    message: 'Qual é o nome da conta?',
  })
  const isAccountExists = await accountExists(accountName)

  if (isAccountExists === false) {
    console.log(chalk.red('🛑 Esta conta não existe\n'))

    init()

    return
  }

  accountController.setCurrentAccount(accountName)

  account()
}

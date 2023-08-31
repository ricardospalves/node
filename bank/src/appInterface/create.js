import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { createNewAccount } from '../bank/index.js'
import { accountController } from '../accountController/index.js'
import { init } from './init.js'
import { account } from './account.js'
import { exit } from './exit.js'

export const create = async () => {
  const accountName = await input({
    message: 'Escolha um nome para a conta?',
  })

  try {
    await createNewAccount(accountName)

    accountController.setCurrentAccount(accountName)

    console.log(
      chalk.green(
        '✨',
        `A conta ${chalk.bold(accountName)} foi criada com sucesso.`,
      ),
    )

    account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message, '\n'))
      init()
      return
    }

    console.log(chalk.red('🛑', error.message, '\n'))
    exit()
  }
}

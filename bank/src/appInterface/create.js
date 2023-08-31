import { input } from '@inquirer/prompts'
import chalk from 'chalk'

import { createNewAccount } from '../bank/index.js'
import { accountController } from '../accountController/index.js'

export const create = async (appReference) => {
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

    appReference.account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message, '\n'))
      appReference.init()
      return
    }

    console.log(chalk.red('🛑', error.message, '\n'))
    appReference.exit()
  }
}

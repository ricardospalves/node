import { confirm, input } from '@inquirer/prompts'
import chalk from 'chalk'

import { deleteAccount as deleteAccountFromBank } from '../bank/deleteAccount.js'
import { accountController } from '../accountController/index.js'

export const deleteAccount = async (appReperence) => {
  const confirmAccountDeletion = await confirm({
    message:
      'Tem certeza que deseja deletar a conta? Esta ação é irreverssível!',
    default: false,
  })

  try {
    if (confirmAccountDeletion) {
      const confirmAccountName = await input({
        message: 'Confirme o nome da conta:',
      })

      if (confirmAccountName !== accountController.currentAccount) {
        console.log(
          chalk.yellow(
            `⚠️ Você só pode deletar a conta que está conectada no momento.`,
          ),
        )

        appReperence.account()

        return
      }

      await deleteAccountFromBank(accountController.currentAccount)

      console.log(chalk.red(`🗑️ Conta deletada`))

      appReperence.init()

      return
    }

    console.log(chalk.yellow('⚠️ Ação cancelada. A conta não foi deletada.'))

    appReperence.account()
  } catch (error) {
    if (error?.data?.customError) {
      console.log(chalk.red('🛑', error.message, '\n'))
      appReperence.init()
      return
    }

    console.log(chalk.red('🛑', error.message, '\n'))
    appReperence.exit()
  }
}

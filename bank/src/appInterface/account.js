import { select } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountController } from '../accountController/index.js'

export const account = async (appReference) => {
  const actionAccount = await select({
    message: `Olá, ${accountController.currentAccount}. O que deseja fazer?`,
    choices: [
      {
        name: 'Consultar o saldo',
        value: 'accountBalance',
      },
      {
        name: 'Depositar',
        value: 'deposit',
      },
      {
        name: 'Sacar',
        value: 'withdraw',
      },
      {
        name: chalk.red('Deletar'),
        value: 'delete',
      },
      {
        name: 'Voltar para o início',
        value: 'init',
      },
      {
        name: 'Sair',
        value: 'exit',
      },
    ],
  })

  appReference[actionAccount]()
}

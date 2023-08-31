import { select } from '@inquirer/prompts'
import chalk from 'chalk'

import { accountController } from '../accountController/index.js'
import { accountBalance } from './accountBalance.js'
import { deposit } from './deposit.js'
import { withdraw } from './withdraw.js'
import { deleteAccount } from './deleteAccount.js'
import { init } from './init.js'
import { exit } from './exit.js'

const ACTIONS = {
  balance: () => accountBalance(),
  deposit: () => deposit(),
  withdraw: () => withdraw(),
  delete: () => deleteAccount(),
  init: () => init(),
  exit: () => exit(),
}

export const account = async () => {
  const actionAccount = await select({
    message: `Olá, ${accountController.currentAccount}. O que deseja fazer?`,
    choices: [
      {
        name: 'Consultar o saldo',
        value: 'balance',
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

  ACTIONS[actionAccount]()
}

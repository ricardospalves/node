import { select } from '@inquirer/prompts'
import chalk from 'chalk'

const app = {
  async default() {
    const action = await select({
      message: 'O que deseja fazer?',
      choices: [
        {
          name: 'Criar uma nova conta',
          value: 'create',
        },
        {
          name: 'Depositar dinheiro',
          value: 'deposit',
        },
        {
          name: 'Consultar o saldo',
          value: 'balance',
        },
        {
          name: 'Sacar dinheiro',
          value: 'withdraw',
        },
        {
          name: 'Deletar a conta',
          value: 'delete',
        },
        {
          name: 'Sair',
          value: 'exit',
        },
      ],
    })

    console.log('[action]', action)
  },
  exit() {
    return process.exit('')
  },
}

console.log(chalk.green('🏦 Você está no', chalk.bold('BankCLI\n')))

process.on('exit', () => {
  console.log(chalk.blue('👋 Até logo'))
})

app.default()

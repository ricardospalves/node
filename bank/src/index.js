import { select } from '@inquirer/prompts'
import chalk from 'chalk'

const app = {
  async init() {
    const action = await select({
      message: 'O que deseja fazer?',
      choices: [
        {
          name: 'Acessar minha conta',
          value: 'login',
        },
        {
          name: 'Criar uma nova conta',
          value: 'create',
        },
        {
          name: 'Sair',
          value: 'exit',
        },
      ],
    })

    this[action]()
  },
  exit() {
    return process.exit('')
  },
}

console.log(chalk.green('🏦 Você está no', chalk.bold('BankCLI\n')))

process.on('exit', () => {
  console.log(chalk.blue('👋 Até logo'))
})

app.init()

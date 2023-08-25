import chalk from 'chalk'
import { AppInterface } from './appInterface/index.js'

const appInterface = new AppInterface()

console.log(chalk.green('🏦 Você está no', chalk.bold('BankCLI\n')))

process.on('exit', () => {
  console.log(chalk.blue('👋 Até logo'))
})

appInterface.init()

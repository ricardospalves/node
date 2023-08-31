import chalk from 'chalk'
import { init } from './appInterface/init.js'

console.log(chalk.green('🏦 Você está no', chalk.bold('BankCLI\n')))

process.on('exit', () => {
  console.log(chalk.blue('👋 Até logo'))
})

init()

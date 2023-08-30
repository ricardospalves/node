import { select } from '@inquirer/prompts'

export const account = async (appReference) => {
  const actionAccount = await select({
    message: `Olá, ${appReference.accountName}. O que deseja fazer?`,
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

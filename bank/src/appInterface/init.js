import { select } from '@inquirer/prompts'

export const init = async (appReference) => {
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

  appReference[action]()
}

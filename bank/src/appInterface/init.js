import { select } from '@inquirer/prompts'

import { login } from './login.js'
import { create } from './create.js'
import { exit } from './exit.js'

const ACTIONS = {
  login: () => login(),
  create: () => create(),
  exit: () => exit(),
}

export const init = async () => {
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

  ACTIONS[action]()
}

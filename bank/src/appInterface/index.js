import { init } from './init.js'
import { create } from './create.js'
import { exit } from './exit.js'
import { account } from './account.js'
import { accountBalance } from './accountBalance.js'

export class AppInterface {
  #app = this
  #accountName

  get accountName() {
    return this.#accountName
  }

  setAccountName(accountName) {
    this.#accountName = accountName
  }

  init = async () => init(this.#app)
  create = async () => create(this.#app)
  exit = () => exit()
  account = async () => account(this.#app)
  accountBalance = async () => accountBalance(this.#app)
}

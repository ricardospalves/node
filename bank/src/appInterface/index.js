import { init } from './init.js'
import { create } from './create.js'
import { exit } from './exit.js'
import { account } from './account.js'
import { accountBalance } from './accountBalance.js'
import { login } from './login.js'
import { deposit } from './deposit.js'
import { withdraw } from './withdraw.js'
import { deleteAccount } from './deleteAccount.js'

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
  login = async () => login(this.#app)
  deposit = async () => deposit(this.#app)
  withdraw = async () => withdraw(this.#app)
  delete = async () => deleteAccount(this.#app)
}

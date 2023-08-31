class AccountController {
  #currentAccount = ''

  get currentAccount() {
    return this.#currentAccount
  }

  setCurrentAccount(accountName) {
    this.#currentAccount = accountName
  }
}

const accountController = new AccountController()

export { accountController }

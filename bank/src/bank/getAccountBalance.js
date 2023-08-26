import { getAccountByName } from './getAccountByName.js'

export const getAccountBalance = async (accountName) => {
  const accountData = await getAccountByName(accountName)

  return accountData.balance
}

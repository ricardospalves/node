import { access, constants } from 'node:fs/promises'
import { accountJoinPath } from './accountJoinPath.js'

export const accountExists = async (accountName) => {
  try {
    await access(accountJoinPath(accountName), constants.R_OK | constants.W_OK)

    return true
  } catch {
    return false
  }
}

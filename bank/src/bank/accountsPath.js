import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const CURRENT_DIRECTORY = dirname(fileURLToPath(import.meta.url))

export const ACCOUNTS_PATH = join(CURRENT_DIRECTORY, './../../accounts')

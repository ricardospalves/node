import { join } from 'node:path'
import { ROOT_PATH } from '../constants/paths.js'

export const joinPath = (...paths) => {
  return join(ROOT_PATH, ...paths)
}

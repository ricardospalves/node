import { init } from './init.js'
import { create } from './create.js'
import { exit } from './exit.js'

export class AppInterface {
  #app = this

  init = async () => init(this.#app)
  create = async () => create(this.#app)
  exit = () => exit()
}

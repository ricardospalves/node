import { randomUUID } from 'node:crypto'

export type UserEntityArguments = Pick<
  models.User,
  'email' | 'name' | 'password'
>

export class UserEntity {
  email: string
  name: string
  password: string

  constructor({ email, name, password }: UserEntityArguments) {
    this.email = email
    this.name = name
    this.password = password
  }

  get id() {
    return randomUUID()
  }
}

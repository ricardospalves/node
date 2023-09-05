import { randomUUID } from 'node:crypto'

type BookArguments = {
  name: string
  author: string
  publishYear: number
}

export class Book {
  name: string
  author: string
  publishYear: number

  constructor({ name, author, publishYear }: BookArguments) {
    this.name = name
    this.author = author
    this.publishYear = publishYear
  }

  get id() {
    return randomUUID()
  }
}

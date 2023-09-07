import { randomUUID } from 'node:crypto'

type BookArguments = {
  name: string
  authorId: string
  publishYear: number
}

export class Book {
  name: string
  authorId: string
  publishYear: number

  constructor({ name, authorId, publishYear }: BookArguments) {
    this.name = name
    this.authorId = authorId
    this.publishYear = publishYear
  }

  get id() {
    return randomUUID()
  }
}

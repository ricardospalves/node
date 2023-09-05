import { MySQLBooksRepository } from '../../repositories/implementations/MySQLBooksRepository'
import { CreateBookController } from './Controller'
import { CreateBookUserCase } from './UserCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const createBookUseCase = new CreateBookUserCase(mysqlBooksRepository)
export const createBookController = new CreateBookController(createBookUseCase)

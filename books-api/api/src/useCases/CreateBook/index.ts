import { MySQLBooksRepository } from '../../repositories/implementations/mysql/MySQLBooksRepository'
import { CreateBookController } from './Controller'
import { CreateBookUseCase } from './UseCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const createBookUseCase = new CreateBookUseCase(mysqlBooksRepository)
export const createBookController = new CreateBookController(createBookUseCase)

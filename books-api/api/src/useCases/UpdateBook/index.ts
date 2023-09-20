import { MySQLBooksRepository } from '../../repositories/implementations/mysql/MySQLBooksRepository'
import { UpdateBookController } from './Controller'
import { UpdateBookUseCase } from './UseCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const updateBookUseCase = new UpdateBookUseCase(mysqlBooksRepository)
export const updateBookController = new UpdateBookController(updateBookUseCase)

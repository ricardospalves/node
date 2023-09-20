import { MySQLBooksRepository } from '../../repositories/implementations/mysql/MySQLBooksRepository'
import { DeleteBookController } from './Controller'
import { DeleteBookUseCase } from './UseCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const deleteBookUseCase = new DeleteBookUseCase(mysqlBooksRepository)
export const deleteBookController = new DeleteBookController(deleteBookUseCase)

import { MySQLBooksRepository } from '../../repositories/implementations/mysql/MySQLBooksRepository'
import { GetBooksController } from './Controller'
import { GetBooksUseCase } from './UseCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const getBooksUseCase = new GetBooksUseCase(mysqlBooksRepository)
export const getBooksController = new GetBooksController(getBooksUseCase)

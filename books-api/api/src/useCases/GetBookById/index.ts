import { MySQLBooksRepository } from '../../repositories/implementations/mysql/MySQLBooksRepository'
import { GetBookByIdController } from './Controller'
import { GetBookByIdUseCase } from './UseCase'

const mysqlBooksRepository = new MySQLBooksRepository()

export const getBookByIdUseCase = new GetBookByIdUseCase(mysqlBooksRepository)
export const getBookByIdController = new GetBookByIdController(
  getBookByIdUseCase,
)

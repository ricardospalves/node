import { Router } from 'express'
import { createBookController } from '../useCases/CreateBook'
import { getBooksController } from '../useCases/GetBooks'
import { getBookByIdController } from '../useCases/GetBookById'

const router = Router()

router.post('/', (request, response) => {
  return createBookController.handle(request, response)
})

router.get('/', (request, response) => {
  return getBooksController.handle(request, response)
})

router.get('/:id', (request, response) => {
  return getBookByIdController.handle(request, response)
})

export { router }

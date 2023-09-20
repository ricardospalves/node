import { Router } from 'express'
import { createBookController } from '../useCases/CreateBook'
import { getBooksController } from '../useCases/GetBooks'
import { getBookByIdController } from '../useCases/GetBookById'

const router = Router()

router.post('/create', (request, response) => {
  return createBookController.handle(request, response)
})

router.get('/books', (request, response) => {
  return getBooksController.handle(request, response)
})

router.get('/book/:id', (request, response) => {
  return getBookByIdController.handle(request, response)
})

export { router }

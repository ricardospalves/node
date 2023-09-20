import { Router } from 'express'
import { createBookController } from '../useCases/CreateBook'
import { getBooksController } from '../useCases/GetBooks'
import { getBookByIdController } from '../useCases/GetBookById'
import { updateBookController } from '../useCases/UpdateBook'
import { deleteBookController } from '../useCases/DeleteBook'

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

router.patch('/update/:id', (request, response) => {
  return updateBookController.handle(request, response)
})

router.delete('/delete/:id', (request, response) => {
  return deleteBookController.handle(request, response)
})

export { router }

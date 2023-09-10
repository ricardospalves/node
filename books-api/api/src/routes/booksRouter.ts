import { Router } from 'express'
import { createBookController } from '../useCases/CreateBook'
import { getBooksController } from '../useCases/GetBooks'

const router = Router()

router.post('/', (request, response) => {
  return createBookController.handle(request, response)
})

router.get('/', (request, response) => {
  return getBooksController.handle(request, response)
})

export { router }

import { Router } from 'express'
import { createBookController } from '../useCases/CreateBook'

const router = Router()

router.post('/', (request, response) => {
  return createBookController.handle(request, response)
})

export { router }

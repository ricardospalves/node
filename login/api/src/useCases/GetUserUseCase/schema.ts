import { z as zod } from 'zod'

export const paramsSchema = zod.object({
  id: zod.string({ required_error: 'O id é obrigatório.' }),
})

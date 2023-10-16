import { z as zod } from 'zod'

const RULES = {
  password: {
    min: 8,
  },
}

export const paramsSchema = zod.object({
  email: zod
    .string({ required_error: 'O e-mail é obrigatório.' })
    .email('O e-mail é inválido.'),
  password: zod
    .string({ required_error: 'A senha é obrigatória.' })
    .min(
      RULES.password.min,
      `A senha deve ter no mínimo ${RULES.password.min} caracteres.`,
    ),
})

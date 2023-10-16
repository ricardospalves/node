import { z as zod } from 'zod'

const RULES = {
  name: {
    min: 2,
  },
  password: {
    min: 8,
  },
}

export const paramsSchema = zod.object({
  email: zod
    .string({
      required_error: 'O e-mail é obrigatório.',
    })
    .email('O e-mail é inválido.'),
  name: zod
    .string({ required_error: 'O nome é obrigatório.' })
    .min(
      RULES.name.min,
      `O nome deve ter no mínimo ${RULES.name.min} caracteres.`,
    ),
  password: zod
    .string({ required_error: 'A senha é obrigatória.' })
    .min(
      RULES.password.min,
      `A senha deve ter no mínimo ${RULES.password.min} caracteres.`,
    ),
})

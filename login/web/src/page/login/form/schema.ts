import { VALIDATION_EMAIL } from '@/constants/validations/email'
import { VALIDATION_PASSWORD } from '@/constants/validations/password'
import { z } from 'zod'

export const schema = z.object({
  email: z
    .string({
      required_error: VALIDATION_EMAIL.required.message,
      invalid_type_error: VALIDATION_EMAIL.invalid.message,
    })
    .email(VALIDATION_EMAIL.invalid.message),
  password: z
    .string({
      required_error: VALIDATION_PASSWORD.required.message,
      invalid_type_error: VALIDATION_PASSWORD.invalid.message,
    })
    .min(VALIDATION_PASSWORD.min.rule, VALIDATION_PASSWORD.min.message),
})

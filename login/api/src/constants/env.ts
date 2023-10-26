import { z as zod } from 'zod'

const envSchema = zod.object({
  SECRET_KEY: zod.string(),
  NODE_ENV: zod
    .enum(['development', 'test', 'production'])
    .default('development'),
  COOKIE_SECRET_KEY: zod.string(),
})

export const ENV = envSchema.parse(process.env)

import { z as zod } from 'zod'

const envSchema = zod.object({
  SECRET_KEY: zod.string(),
  NODE_ENV: zod
    .enum(['development', 'test', 'production'])
    .default('development'),
})

export const ENV = envSchema.parse(process.env)

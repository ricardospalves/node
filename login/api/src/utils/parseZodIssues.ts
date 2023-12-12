import { ZodError } from 'zod'

export const parseZodIssues = (issues: ZodError) => {
  return issues.issues.map(({ message, path }) => {
    return {
      name: path[0],
      message,
    }
  })
}

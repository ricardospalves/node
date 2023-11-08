export const VALIDATION_PASSWORD = {
  required: {
    message: 'A senha é obrigatória.',
  },
  invalid: {
    message: 'A senha é inválida.',
  },
  min: {
    rule: 8,
    get message() {
      return `A senha deve ter no mínimo ${this.rule} caracteres.`
    },
  },
} as const

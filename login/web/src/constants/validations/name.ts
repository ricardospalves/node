export const VALIDATION_NAME = {
  required: {
    message: 'O nome é obrigatório.',
  },
  invalid: {
    message: 'O nome é inválido.',
  },
  min: {
    rule: 2,
    get message() {
      return `O nome deve ter no mínimo ${this.rule} caracteres.`
    },
  },
} as const

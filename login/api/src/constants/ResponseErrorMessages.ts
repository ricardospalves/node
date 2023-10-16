export const RESPONSE_ERROR_MESSAGES = {
  userAlreadyExists: {
    id: 'userAlreadyExists',
    message: 'O usuário já está cadastrado.',
    statusCode: 409,
  },
  internalServerError: {
    id: 'internalServerError',
    message: 'Erro interno de servidor',
    statusCode: 500,
  },
  invalidUser: {
    id: 'invalidUser',
    message: 'Nome de usuário ou senha incorretos.',
    statusCode: 422,
  },
}

export type ResponseErrorMessagesKeys = keyof typeof RESPONSE_ERROR_MESSAGES

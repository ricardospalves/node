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
}

export type ResponseErrorMessagesKeys = keyof typeof RESPONSE_ERROR_MESSAGES

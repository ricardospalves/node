export const RESPONSE_ERROR_MESSAGES = {
  userAlreadyExists: {
    id: 'userAlreadyExists',
    message: 'O usuário já está cadastrado.',
    statusCode: 409,
  },
  internalServerError: {
    id: 'internalServerError',
    message: 'Erro interno de servidor.',
    statusCode: 500,
  },
  invalidUser: {
    id: 'invalidUser',
    message: 'Nome de usuário ou senha incorretos.',
    statusCode: 422,
  },
  userNotFound: {
    id: 'userNotFound',
    message: 'O usuário não existe.',
    statusCode: 404,
  },
  tokenNotProvided: {
    id: 'tokenNotProvided',
    message: 'O token não foi fornecido.',
    statusCode: 401,
  },
  invalidToken: {
    id: 'invalidToken',
    message: 'O token é inválido ou expirou.',
    statusCode: 401,
  },
  unauthorizedUser: {
    id: 'unauthorizedUser',
    message: 'Você não tem autorização para acessar este conteúdo.',
    statusCode: 403,
  },
}

export type ResponseErrorMessagesKeys = keyof typeof RESPONSE_ERROR_MESSAGES

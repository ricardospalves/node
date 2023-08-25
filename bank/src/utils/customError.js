export const customError = (message) => {
  const error = new Error(message)

  error.data = {
    customError: true,
  }

  throw error
}

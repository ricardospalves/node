export const getBearerToken = (bearerToken: string) => {
  const token = bearerToken.replace(/^Bearer /, '')

  return token
}

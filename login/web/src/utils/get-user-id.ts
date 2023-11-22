import { decode } from 'jsonwebtoken'
import { cookies } from 'next/headers'

type JwtPayload = {
  id: string
}

export const getUserId = () => {
  const tokenCookie = cookies().get('token')

  if (!tokenCookie?.value) {
    return null
  }

  const jwtToken = decode(tokenCookie.value) as JwtPayload | null

  if (!jwtToken) {
    return jwtToken
  }

  return jwtToken.id
}

import { NextRequest, NextResponse } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const { cookies } = request
  const tokenCookie = cookies.get('token')

  if (!tokenCookie?.value) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const response = await fetch('http://localhost:3333/verify-token', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${tokenCookie.value}`,
      },
    })

    if (!response.ok) {
      throw new Error()
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/((?!login|cadastro)):path*',
}

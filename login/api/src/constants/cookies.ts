import ms from 'ms'

const millisecondsToSeconds = (milliseconds: number) => {
  return milliseconds / 1000.0
}

export const COOKIES = {
  token: {
    name: 'token',
    maxAge: millisecondsToSeconds(ms('8 hours')),
  },
} as const

type Options = {
  maxLetters?: number
}

export const getInitialLettersName = (
  value: string,
  options: Options = { maxLetters: 2 },
) => {
  return value
    .split(' ')
    .map((word) => word[0])
    .slice(0, options.maxLetters)
    .join('')
    .toUpperCase()
}

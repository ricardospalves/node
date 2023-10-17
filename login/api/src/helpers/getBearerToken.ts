export const getBearerToken = (
  bearer: string,
): ['Bearer', string] | undefined => {
  const array = bearer.split(' ')

  if (array.length !== 2) {
    return undefined
  }

  return ['Bearer', array[1]]
}

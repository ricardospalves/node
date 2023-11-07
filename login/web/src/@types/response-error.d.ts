type ResponseError = {
  error: false
  message: string
  fieldErrors?: [
    {
      name: string
      message: string
    },
  ]
}

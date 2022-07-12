type LoginDataTypes = {
  email: string
  pass: string
}

const loginDataVerify = (data: LoginDataTypes): boolean => !!(data.email && data.pass)

export default loginDataVerify

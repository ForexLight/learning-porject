type LoginDataTypes = {
  email: string
  password: string
}

const loginDataVerify = (data: LoginDataTypes): boolean => !!(data.email && data.password)

export default loginDataVerify

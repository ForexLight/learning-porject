import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Input from '../../shared/Input/Input'
import { LoginDataTypes } from '../Login'

interface OwnProps {
  visibleError: boolean
  setLoginInputError: (arg: boolean) => void
  setPasswordInputError: (arg: boolean) => void
  loginInputError: boolean
  setData: (arg: LoginDataTypes) => void
  data: {
    email: string
    password: string
  }
  passwordInputError: boolean
}

type Props = OwnProps

const InputRequirement = styled.span`
  color: red;
`

const Inputs: FunctionComponent<Props> = ({
  visibleError,
  data,
  setPasswordInputError,
  setData,
  passwordInputError,
  loginInputError,
  setLoginInputError,
}) => {
  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (regEx.test(e.target.value)) {
      setData({ ...data, email: e.target.value })
    } else {
      setLoginInputError(true)
      if (e.target.value.length < 1) {
        setLoginInputError(false)
      }
    }
  }
  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

    if (regEx.test(e.target.value)) {
      setData({ ...data, password: e.target.value })
    } else {
      setPasswordInputError(true)
      if (e.target.value.length < 1) {
        setPasswordInputError(false)
      }
    }
  }
  return (
    <>
      <Input
        label=''
        aria-label='Email'
        onChange={loginHandler}
        placeholder='input email'
        isError={visibleError}
        data-testid='email-input'
      />
      {loginInputError && data.email.length === 0 ? (
        <InputRequirement data-testid='email-error'>
          Your email is not pass requires template
        </InputRequirement>
      ) : null}
      <Input
        label=''
        aria-label='Pass'
        onChange={passHandler}
        isError={visibleError}
        placeholder='input password'
        data-testid='pass-input'
      />
      {passwordInputError && data.password.length < 1 ? (
        <InputRequirement data-testid='pass-error'>
          Your password is not pass requires template{' '}
        </InputRequirement>
      ) : null}
    </>
  )
}

export default Inputs

import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import loginDataVerify from '../../helpers/loginDataVeriffer'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import Notifications from '../shared/Notifications/Notifications'
import SvgLoader from '../../helpers/SvgLoader'

type LoginDataTypes = {
  email: string
  pass: string
}

type OwnProps = {
  setVisibleNav: (arg0: boolean) => void
}

const LoginWrapper = styled.section`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 10px;
  height: 100vh;
  font-size: 20px;
`
const Greeting = styled.div`
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    &:nth-child(1) {
      font-size: 42px;
      font-weight: 600;
    }

    &:nth-child(2) {
      font-size: 35px;
      font-weight: 500;
    }
  }
`

const Logo = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
    width: 225px;
  }
`

const LoginForm = styled.div`
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    padding-top: 5px;
    font-size: 14px;
  }

  input {
    width: 90%;
    height: 40px;
    padding-bottom: 5px;
  }
`

const Separator = styled.div`
  margin: 10px;
  position: relative;
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;

  hr {
    width: 100%;
  }

  span {
    width: 100px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    padding-bottom: 5px;
    background-color: rgb(255, 255, 255);
    position: absolute;
  }
`
const BtnData = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;

  svg {
    position: absolute;
    left: 0;
    width: 24px;
  }

  span {
    font-size: 18px;
  }
`
const InputRequirement = styled.span`
  color: red;
`

const BtnsContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Login: React.FC<OwnProps> = ({ setVisibleNav }) => {
  const WAIT_TIME = 1500
  const [data, setData] = useState<LoginDataTypes>({ email: '', pass: '' })
  const [visibleError, setVisibleError] = useState<boolean>(false)
  const [visibleSuccess, setVisibleSuccess] = useState<boolean>(false)
  const [loginInputError, setLoginInputError] = useState<boolean>(false)
  const [passwordInputError, setPasswordInputError] = useState<boolean>(false)

  const navigate = useNavigate()

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
      setData({ ...data, pass: e.target.value })
    } else {
      setPasswordInputError(true)
      if (e.target.value.length < 1) {
        setPasswordInputError(false)
      }
    }
  }
  const sendData = () => {
    if (!loginDataVerify(data)) {
      setVisibleError(true)
      setTimeout(() => {
        setVisibleError(false)
      }, WAIT_TIME)
      return
    }

    setVisibleSuccess(true)
    setTimeout(() => {
      setVisibleError(false)
      navigate('/main', { replace: true })
      setVisibleNav(true)
    }, WAIT_TIME)
  }
  return (
    <LoginWrapper>
      {visibleError ? <Notifications text='error in input data' status='error' /> : null}
      {visibleSuccess ? <Notifications text='All ok, redirecting...' status='success' /> : null}
      <Logo>
        <img src={logo} alt='logo' />
        <Greeting>
          <span>Welcome,</span>
          <span>Glad to see you!</span>
        </Greeting>
      </Logo>
      <LoginForm>
        <Input
          label=''
          aria-label='Email'
          onChange={loginHandler}
          placeholder='input email'
          isError={visibleError}
        />
        {loginInputError && data.email.length === 0 ? (
          <InputRequirement> Your email is not pass requires template</InputRequirement>
        ) : null}
        <Input
          label=''
          aria-label='Pass'
          onChange={passHandler}
          isError={visibleError}
          placeholder='input password'
        />
        {passwordInputError && data.pass.length < 1 ? (
          <InputRequirement> Your password is not pass requires template </InputRequirement>
        ) : null}
        <BtnsContainer>
          <Button
            onClick={sendData}
            size='90%'
            text='Log in'
            type='regular'
            data-testid='login-btn'
          />
          <Separator>
            <span>Or Login with</span>
            <hr />
          </Separator>
          <Button
            onClick={sendData}
            size='90%'
            text={
              <BtnData>
                <SvgLoader id='google' />
                <span>Login with google</span>
              </BtnData>
            }
            type='google'
            data-testid='login-btn'
          />
          <Button
            onClick={sendData}
            size='90%'
            text={
              <BtnData>
                <SvgLoader id='facebook' />
                <span>Login with facebook</span>
              </BtnData>
            }
            type='facebook'
            data-testid='login-btn'
          />
        </BtnsContainer>

        <span>
          If u don&rsquo;t have an account u can create it
          <b>
            <a href='/login'> here</a>
          </b>
        </span>
      </LoginForm>
    </LoginWrapper>
  )
}

export default Login

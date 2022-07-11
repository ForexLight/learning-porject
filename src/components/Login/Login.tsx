import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import loginDataVerify from '../../helpers/loginDataVeriffer'
import Button from '../shared/Button/Button'
import Input from '../shared/Input/Input'
import Notifications from '../shared/Notifications/Notifications'

type LoginDataTypes = {
  email: string
  pass: string
}

const LoginWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px;
  height: 100vh;
  font-size: 20px;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      height: 300px;
    }
  }

  .login-form {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    span {
      padding-top: 5px;
      font-size: 14px;
    }
  }
`

const Login: React.FC = () => {
  const [data, setData] = useState<LoginDataTypes>({ email: '', pass: '' })
  const [visibleError, setVisibleError] = useState<boolean>(false)
  const [visibleSuccess, setVisibleSuccess] = useState<boolean>(false)

  const navigate = useNavigate()

  const loginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, email: e.target.value })
  }
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, pass: e.target.value })
  }
  const sendData = () => {
    if (!loginDataVerify(data)) {
      setVisibleError(true)
      setTimeout(() => {
        setVisibleError(false)
      }, 1500)
      throw new Error('error in date')
    }
    setVisibleSuccess(true)
    setTimeout(() => {
      setVisibleError(false)
      navigate('/main', { replace: true })
    }, 1000)
  }
  return (
    <LoginWrapper>
      {visibleError ? <Notifications text='error in input data' status='error' /> : null}
      {visibleSuccess ? <Notifications text='All ok, redirecting...' status='success' /> : null}
      <div className='logo'>
        <img src={logo} alt='logo' />
        <span>Login page</span>
      </div>
      <div className='login-form'>
        <Input label='Email' onChange={loginHandler} isError={visibleError} />
        <Input label='Password' onChange={passwordHandler} isError={visibleError} />
        <Button onClick={sendData} size='100px' text='Login' type='regular' />
        <span>
          If u don&rsquo;t have an account u can create it
          <b>
            <a href='/login'> here</a>
          </b>
        </span>
      </div>
    </LoginWrapper>
  )
}

export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/logo.png'
import loginDataVerify from '../../helpers/loginDataVeriffer'
import Notifications from '../shared/Notifications/Notifications'
import Inputs from './components/Inputs'
import Buttons from './components/Buttons'
import { useAppDispatch } from '../../hooks'
import { changeData } from '../../store/slices/userDataSlice'
import { Greeting, LoginForm, LoginWrapper, Logo } from './Styles'

export type LoginDataTypes = {
  email: string
  password: string
}

type OwnProps = {
  setVisibleNav: (arg0: boolean) => void
}

const Login: React.FC<OwnProps> = ({ setVisibleNav }) => {
  const dispatch = useAppDispatch()
  const WAIT_TIME = 1500
  const [data, setData] = useState<LoginDataTypes>({ email: '', password: '' })
  const [visibleError, setVisibleError] = useState<boolean>(false)
  const [visibleSuccess, setVisibleSuccess] = useState<boolean>(false)
  const [loginInputError, setLoginInputError] = useState<boolean>(false)
  const [passwordInputError, setPasswordInputError] = useState<boolean>(false)

  const navigate = useNavigate()

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
      dispatch(changeData({ ...data }))
      setVisibleError(false)
      navigate('/main', { replace: true })
      setVisibleNav(true)
    }, WAIT_TIME)
  }
  return (
    <LoginWrapper data-testid='login-wrapper'>
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
        <h3>Log in</h3>
        <Inputs
          visibleError={visibleError}
          setLoginInputError={setLoginInputError}
          loginInputError={loginInputError}
          setData={setData}
          data={data}
          passwordInputError={passwordInputError}
          setPasswordInputError={setPasswordInputError}
        />
        <Buttons sendData={sendData} />
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

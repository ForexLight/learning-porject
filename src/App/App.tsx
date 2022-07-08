import React, { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import styled from 'styled-components'
import Login from '../components/Login/Login'
import Main from '../components/Main/Main'

const AppWrapper = styled.main`
  font-size: 1.5em;
  color: red;
`

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  return (
    <Router>
      <AppWrapper>
        <h1>Hello world</h1>
        <Routes>
          <Route
            index
            element={isAuth ? <Navigate replace to='/main' /> : <Navigate replace to='/login' />}
          />
          <Route path='login' element={<Login />} />
          <Route path='main' element={<Main />} />
        </Routes>
      </AppWrapper>
    </Router>
  )
}

export default App

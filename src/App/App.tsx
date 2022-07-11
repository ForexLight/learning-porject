import React, { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import '../../node_modules/modern-normalize/modern-normalize.css'

import styled from 'styled-components'
import Login from '../components/Login/Login'
import Main from '../components/Main/Main'

const AppWrapper = styled.main`
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
  font-size: 1.5em;
  color: red;
`

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  return (
    <Router>
      <AppWrapper>
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

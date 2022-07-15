import React, { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import '../../node_modules/modern-normalize/modern-normalize.css'

import styled from 'styled-components'
import Login from '../components/Login/Login'
import Main from '../components/Main/Main'
import NavBar from '../components/NavBar/NavBar'
import MedicalTests from '../components/MedicalTests/MedicalTests'
import Doctors from '../components/Dotors/Doctors'
import Calendar from '../components/Calendar/Calendar'

const AppWrapper = styled.main`
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
  font-size: 1.5em;
  color: red;
`

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  return (
    <Router>
      <AppWrapper>
        {isAuth ? <NavBar /> : null}
        <Routes>
          <Route
            index
            element={isAuth ? <Navigate replace to='main' /> : <Navigate replace to='login' />}
          />
          <Route path='login' element={<Login setVisibleNav={setIsAuth} />} />
          <Route path='main' element={<Main />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='medicaltest' element={<MedicalTests />} />
        </Routes>
      </AppWrapper>
    </Router>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import '../../node_modules/modern-normalize/modern-normalize.css'

import styled from 'styled-components'

import { Provider } from 'react-redux'
import { store } from '../store/store'

import Login from '../components/Login/Login'
import Main from '../components/Main/Main'
import NavBar from '../components/NavBar/NavBar'
import MedicalTests from '../components/MedicalTests/MedicalTests'
import Doctors from '../components/Dotors/Doctors'
import Calendar from '../components/Calendar/CalendarPage'
import DoctorPage from '../components/DoctorsPage/DoctorPage'
import PlaceHolderJSON from '../components/PlaceHolderJSON/PlaceHolderJSON'

const AppWrapper = styled.main`
  max-width: 100vw;
  font-size: 1.5em;
  color: red;
  @media (min-width: 766px) {
  }
`

const App: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  return (
    <Router>
      <Provider store={store}>
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
            <Route path='doctors/:id' element={<DoctorPage />} />
            <Route path='medicaltest' element={<MedicalTests />} />
            <Route path='placeholder' element={<PlaceHolderJSON />} />
          </Routes>
        </AppWrapper>
      </Provider>
    </Router>
  )
}

export default App

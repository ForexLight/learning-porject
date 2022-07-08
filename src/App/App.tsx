import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import image from '../images/meme.jpg'

const AppWrapper = styled.main`
  font-size: 1.5em;
  text-align: center;
  color: red;
  overflow: hidden;
  max-width: 100%;

  section {
    display: flex;
    flex-direction: column;
  }
`

export interface HelloWorldProps {
  userName: string
  lang: string
}

const App: React.FC<HelloWorldProps> = ({ userName, lang }) => (
  <AppWrapper>
    <Header />
    <section>
      Hi {userName} from React! Welcome to {lang}!
      <img src={image} alt='meme' />
    </section>
    <Footer />
  </AppWrapper>
)

export default App

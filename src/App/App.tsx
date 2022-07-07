import React from 'react'
import styled from 'styled-components'

import Header from '../components/Header/Header'
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

export function App({ userName, lang }: HelloWorldProps) {
  return (
    <AppWrapper>
        <Header />
        <section>
            Hi {userName} from React! Welcome to {lang}!
            <img src={image} alt='meme' />
        </section>

    </AppWrapper>
  )
}

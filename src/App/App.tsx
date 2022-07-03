import React from 'react'
import styled from 'styled-components'

import image from '../images/meme.jpg'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`

export interface HelloWorldProps {
  userName: string
  lang: string
}
export function App({ userName, lang }: HelloWorldProps) {
  return (
    <Title>
      Hi {userName} from React! Welcome to {lang}!
      <img src={image} alt='meme' />
    </Title>
  )
}

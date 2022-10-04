import React from 'react'

import userImg from '../../../images/user_logo.png'
import greetingByDayTime from '../../../helpers/greetingByDayTime'
import {
  AdditionalInformation,
  GreetingStyled,
  MainInformation,
  Separator,
} from './Greetings.styles'

const Greeting: React.FC = () => (
  <GreetingStyled>
    <MainInformation>
      <img src={userImg} alt='user logo' />
      <h2>
        Good {greetingByDayTime(new Date())} <br /> Patient Vlad
      </h2>
    </MainInformation>
    <AdditionalInformation>
      <ul>
        <li>
          <span>Sex:</span> male
        </li>
        <li>
          <span>Age:</span> 20 y.o.
        </li>
        <li>
          <span>Blood type:</span> AB+
        </li>
      </ul>
      <Separator />
      <ul>
        <li>
          <span>Contract till:</span> 10.10.2025
        </li>
        <li>
          <span>Problem:</span> legs
        </li>
        <li>
          <span>Medical id:</span> 123123
        </li>
      </ul>
    </AdditionalInformation>
  </GreetingStyled>
)

export default Greeting

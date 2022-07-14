import React from 'react'
import styled from 'styled-components'

import Greeting from './Components/Greeting'

const StyledMain = styled.div``

const Main: React.FC = () => (
  <StyledMain>
    <Greeting />
  </StyledMain>
)

export default Main

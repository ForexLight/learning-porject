import React from 'react'
import styled from 'styled-components'

import Greeting from './Components/Greeting'

const StyledMain = styled.div`
  margin: 5px;
`

const Main: React.FC = () => (
  <StyledMain>
    <Greeting />
  </StyledMain>
)

export default Main

import React, { useState } from 'react'
import styled from 'styled-components'

import Burger from './Burger'
import Menu from './Menu'

const HeaderStyle = styled.header`
  background-color: #ff8585;
  overflow: hidden;
  max-width: 100vw;
  @media (min-width: 481px) {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
  }

  .logo {
    color: blue;
  }
`

const Header: React.FC = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false)

  return (
    <HeaderStyle>
      <div className='logo'>
        <h2>LOGO</h2>
      </div>
      <div className='burger'>
        <Burger open={navbarVisible} setOpen={setNavbarVisible} />
        <Menu open={navbarVisible} />
      </div>
    </HeaderStyle>
  )
}

export default Header

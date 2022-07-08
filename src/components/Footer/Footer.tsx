import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  background-color: #ff8585;
  overflow: hidden;
  max-width: 100vw;

  .logo {
    color: blue;
  }
`
const Footer: React.FC = () => {
  return (
    <FooterStyle>
      <div className='logo'>
        <h2>Footer</h2>
      </div>
    </FooterStyle>
  )
}

export default Footer

import styled from 'styled-components'
import React from 'react'

type menuTypes = {
  open: boolean
}
const StyledMenu = styled.nav`
  background: #00ffb1;
  display: ${({ open }: menuTypes) => (open ? 'block' : 'none')};
  opacity: ${({ open }: menuTypes) => (open ? '1' : '0')};
  height: 100vh;
  position: fixed;
  width: 300px;
  top: 0;
  right: 0;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: center;
    a {
      padding: 10px;
    }
  }
`

const Menu: React.FC<menuTypes> = ({ open }) => (
  <StyledMenu open={open}>
    <div>
      <a href='/'>Link 1</a>
      <a href='/'>Link 2</a>
      <a href='/'>Link 3</a>
    </div>
  </StyledMenu>
)

export default Menu

import styled from "styled-components"
import React from "react"

const StyledMenu = styled.nav`
  
  background: #00ffb1;
  display: ${({open}: { open: boolean }) => open ? 'block' : 'none'};
  opacity: ${({ open }:{open: boolean}) => open ? '1' : '0'};
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

export const Menu = ({ open }:{open: boolean}) => {
    return (
        <StyledMenu open={open}>
            <div>
                <a href='#' >Link 1</a>
                <a href='#' >Link 2</a>
                <a href='#' >Link 3</a>
            </div>
        </StyledMenu>
    )
}
import styled from 'styled-components'
import React from 'react'

type burgerTypes = {
    open: boolean,
    setOpen: (p: boolean) => void
}

type styledTypes = {
    open: boolean
}

const StyledBurger = styled.button`
  position: fixed;
  top: calc(50% - 1rem);
  right: 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({open}: styledTypes) => open ? '#00ffac' : '#0D0C1D'};;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  z-index: 2;
  height: 50px;
  width: 50px;
  padding: 10px;
  @media (min-width: 481px) {
    position: relative;
  }

  div {
    width: 30px;
    height: 0.25rem;
    background: ${({open}: styledTypes) => open ? '#0D0C1D' : '#00ffac'};
    border-radius: 10px;
    transition: all 0.3s linear;

    :first-child {
      transform: ${({open}: styledTypes) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}: styledTypes) => open ? '0' : '1'};
    }

    :nth-child(3) {
      transform: ${({open}: styledTypes) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`


export const Burger = ({open, setOpen}: burgerTypes) => {

    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}
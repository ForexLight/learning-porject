import styled from 'styled-components'
import { NavBarStyledProps } from './Types'

const NavBarStyled = styled.nav<NavBarStyledProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    list-style-type: none;

    li {
      padding: 5px;
      height: 70px;
      width: 25%;
    }

    li:nth-child(${(props) => props.active}) {
      background-color: red;
    }

    li > a {
      margin: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      align-items: center;
      color: black;
      text-decoration: none;

      svg {
        width: 30px;
      }
    }
  }

  @media (min-width: 540px) {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    background-color: gray;
    ul {
      align-self: flex-end;
      justify-self: flex-end;
      width: 60%;
    }

    ul > li > a {
      padding: 0;
      margin: 0;
    }

    @media (min-width: 766px) {
      ul {
        width: 40%;
      }
    }
  }
`

export default NavBarStyled

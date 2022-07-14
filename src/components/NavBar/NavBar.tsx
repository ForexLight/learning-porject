import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SvgLoader from '../../helpers/SvgLoader'

const NavBarStyled = styled.nav<StyledProps>`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media (min-width: 512px) {
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
type StyledProps = {
  active: number
}
interface OwnProps {
  dark?: boolean
}

type Props = OwnProps

const NavBar: React.FC<Props> = () => {
  const [Active, setActive] = useState<number>(1)
  return (
    <NavBarStyled active={Active}>
      <ul>
        <li role='menuitem' onClick={() => setActive(1)} onKeyDown={() => null}>
          <Link to='/main'>
            <SvgLoader id='dashboard' />
            <span>dashboard</span>
          </Link>
        </li>
        <li role='menuitem' onClick={() => setActive(2)} onKeyDown={() => null}>
          <Link to='/medicaltest'>
            <SvgLoader id='tests' />
            <span>tests</span>
          </Link>
        </li>
        <li role='menuitem' onClick={() => setActive(3)} onKeyDown={() => null}>
          <Link to='/doctors'>
            <SvgLoader id='doctor' />
            <span>doctors</span>
          </Link>
        </li>
        <li role='menuitem' onClick={() => setActive(4)} onKeyDown={() => null}>
          <Link to='/calendar'>
            <SvgLoader id='calendar' />
            <span>calendar</span>
          </Link>
        </li>
      </ul>
    </NavBarStyled>
  )
}

export default NavBar

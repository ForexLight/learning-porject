import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SvgLoader from '../../helpers/SvgLoader'
import { NavBarProps } from './Types'
import NavBarStyled from './NavBar.styles'

const NavBar: React.FC<NavBarProps> = () => {
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

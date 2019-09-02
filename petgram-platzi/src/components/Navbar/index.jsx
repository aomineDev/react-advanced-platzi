import React from 'react'

import { Navbar, Link } from './styles'

import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const size = '24px'

export const NavbarComponent = () => (
  <Navbar>
    <Link to='/'><MdHome size={size} /></Link>
    <Link to='/favs'><MdFavoriteBorder size={size} /></Link>
    <Link to='/user'><MdPersonOutline size={size} /></Link>
  </Navbar>
)

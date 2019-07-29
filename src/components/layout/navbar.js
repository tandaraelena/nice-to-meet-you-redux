import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './layout.style'
import SignedInLinks from './sign-in';
import SingOutLinks from './sign-out';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to='/'>Home</Link>
      <SignedInLinks/>
      <SingOutLinks/>
    </NavbarStyled>
  )
}

export default Navbar

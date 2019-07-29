import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled, SignedInLinksStyled } from './layout.style'
import SignedInLinks from './sign-in';

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to='/'>Home</Link>
      <SignedInLinks/>
    </NavbarStyled>
  )
}

export default Navbar

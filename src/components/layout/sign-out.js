import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedInLinksStyled } from './layout.style';

const SingOutLinks = () => {
  return (
    <SignedInLinksStyled>
      <NavLink to='/sign-up' >Sign up</NavLink>
      <NavLink to='/sign-in' >Login</NavLink>
    </SignedInLinksStyled>
  )
}

export default SingOutLinks
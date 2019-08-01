import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedInLinksStyled } from './layout.style';

const SingOutLinks = () => {
  return (
    <SignedInLinksStyled>
      <NavLink to='/sign-up' >SignUp</NavLink>
      <NavLink to='/sign-in' >LogIn</NavLink>
    </SignedInLinksStyled>
  )
}

export default SingOutLinks
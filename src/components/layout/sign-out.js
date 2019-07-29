import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedInLinksStyled } from './layout.style';

const SingOutLinks = () => {
  return (
    <SignedInLinksStyled>
      <NavLink to='/' >SignUp</NavLink>
      <NavLink to='/' >LogIn</NavLink>
    </SignedInLinksStyled>
  )
}

export default SingOutLinks
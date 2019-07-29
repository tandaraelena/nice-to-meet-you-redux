import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedInLinksStyled } from './layout.style';

const SignedInLinks = () => {
  return (
    <SignedInLinksStyled>
      <NavLink to='/' >Add</NavLink>
      <NavLink to='/' >Log Out</NavLink>
      <NavLink to='/' >ET</NavLink>
    </SignedInLinksStyled>
  )
}

export default SignedInLinks
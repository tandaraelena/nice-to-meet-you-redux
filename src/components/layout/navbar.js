import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './layout.style'
import SignedInLinks from './sign-in';
import SingOutLinks from './sign-out';
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to='/'>Home</Link>
      <SignedInLinks/>
      <SingOutLinks/>
    </NavbarStyled>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar)

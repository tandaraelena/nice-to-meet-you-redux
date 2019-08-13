import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './layout.style'
import SignedInLinks from './sign-in';
import SingOutLinks from './sign-out';
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks/> : <SingOutLinks/>
  return (
    <NavbarStyled>
      <Link to='/'>Home</Link>
      {links}
    </NavbarStyled>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)

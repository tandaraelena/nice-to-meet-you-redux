import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarStyled } from './layout.style'
import SignedInLinks from './sign-in';
import SingOutLinks from './sign-out';
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth, profile } = props
  // console.log(auth)
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SingOutLinks/>
  return (
    <NavbarStyled>
      <Link to='/'>Home</Link>
      {links}
    </NavbarStyled>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)

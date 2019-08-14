import React from 'react'
import { NavLink } from 'react-router-dom'
import { SignedInLinksStyled } from './layout.style';
import { connect } from 'react-redux'
import { signOut } from '../app/store/actions/auth-actions'

const SignedInLinks = (props) => {
  return (
    <SignedInLinksStyled>
      <NavLink to='/create-day' >Add</NavLink>
      <a onClick={props.signOut} style={{cursor: 'pointer'}}>Log Out</a>
      <NavLink to='/' >{props.profile.initials}</NavLink>
    </SignedInLinksStyled>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
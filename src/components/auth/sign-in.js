import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../app/store/actions/auth-actions.js'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value 
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError } = this.props
    return (
      <div className='container' >
        <form onSubmit={this.handleSubmit} className='white'>
        <h5>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={this.handleChange} />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={this.handleChange} />
        </div >
          <button>Login</button>
        <div className='center red-text'>
          { authError ? <p>{authError}</p> : null }
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

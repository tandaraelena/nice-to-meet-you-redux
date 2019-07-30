import React, { Component } from 'react'

class SingnIn extends Component {
  state = {

  }
  render() {
    return (
      <div className='container' >
        <form onSubmit={} className='white'>
        <h5>Sign In</h5>
        <div className='input-field'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' onChange={} />
        </div>
        <div className='input-field'>
          <label htmlFor='password'>Password</label>
          <input type='password' id='password' onChange={} />
        </div >
        <div className='input-field'>
          <button>Login</button>
        </div>
        </form>
      </div>
    )
  }
}

export default SingnIn

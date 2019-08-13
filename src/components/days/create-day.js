import React, { Component } from 'react'
import createDay from '../app/store/actions/days-actions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'


class CreateDay extends Component {
  state = {
    dayNo: '',
    description: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createDay(this.state)
    // console.log(this.state)
  }
  render() {
    const { auth } = this.props
    console.warn(this.props)
    if (!auth.uid) return <Redirect to='/'/>

    return (
      <div className='container' >
        <form onSubmit={this.handleSubmit} className='white'>
          <h5>Create day</h5>
          <div className='input-field'>
            <label htmlFor='dayNo'>Day Number</label>
            <input type='text' id='dayNo' onChange={this.handleChange} />
          </div>
          <div className='input-field'>
            <label htmlFor='description'>Description</label>
            <textarea id='description' className='materialize-textarea' onChange={this.handleChange}> </textarea>
          </div >
          <button>Create</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createDay: (day) => dispatch(createDay(day))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDay)

import React, { Component } from 'react'

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
    console.log(this.state)
  }
  render() {
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

export default CreateDay

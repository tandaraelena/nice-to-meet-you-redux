import React, { Component } from 'react'
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from './test.actions';

const mapStateToProps = (state) => ({
  data: state.data,
  bla: 'bla'
})

const actions = {
  incrementCounter,
  decrementCounter
}

class Test extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props
    return (
      <div>
        <h1>test component</h1>
        <h2>the answer is: {data}</h2>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(Test)
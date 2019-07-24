import React, { Component } from 'react'
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  data: state.data,
  bla: 'bla'
})

class Test extends Component {
  render() {
    return (
      <div>
        <h1>test component</h1>
        <h2>the aswer is: {this.props.bla}</h2>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Test)
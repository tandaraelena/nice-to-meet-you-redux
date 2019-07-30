import React, { Component } from 'react'
import DaysList from '../days/days-list';

class Home extends Component {
  render() {
    return (
      <div>
        <h3>Home</h3>
        <DaysList/>
      </div>
    )
  }
}

export default Home

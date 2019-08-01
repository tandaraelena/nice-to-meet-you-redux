import React, { Component } from 'react'
import DaysList from '../days/days-list';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    console.log(this.props);
    const { days } = this.props 
    return (
      <div>
        <h3>Home</h3>
        <DaysList days={days} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    days: state.day.days
  }
}

export default connect(mapStateToProps)(Home)

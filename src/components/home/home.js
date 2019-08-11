import React, { Component } from 'react'
import DaysList from '../days/days-list';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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
  console.log(state)
  return {
    days: state.firestore.ordered.days
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'days' }
  ])
)(Home)

import React, { Component } from 'react'
import DaysList from '../days/days-list';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import StyledHomePage from './home.style';

class Home extends Component {
  render() {
    console.log(this.props);
    const { days } = this.props 

    return (
      <StyledHomePage>
        <div className='box-example'>Home</div>
        <DaysList days={days} />
      </StyledHomePage>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    days: state.firestore.ordered.days,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'days',
    orderBy: ['createdAt', 'asc'] }
  ])
)(Home)

import React from 'react'
import DayItem from './day-item'
import { Link } from 'react-router-dom'

const DaysList = ({ days: { days } }) => {
  return (
    <div className='days-list'>
      {days && days.map(day => {
        return (
          <Link to={'/day/' + day.id} key={day.id}>
            <DayItem day={day} key={day.id}/>
          </Link>
        )}
      )}
    </div>
  )
}

export default DaysList

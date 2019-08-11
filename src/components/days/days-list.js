import React from 'react'
import DayItem from './day-item'
import { Link } from 'react-router-dom'

const DaysList = ({ days }) => {
  return (
    <div className='days-list'>
      {days && days.map(day => {
        return (
            <DayItem day={day} key={day.id}/>
        )}
      )}
    </div>
  )
}

export default DaysList

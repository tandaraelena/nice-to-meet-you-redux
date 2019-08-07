import React from 'react'
import DayItem from './day-item'

const DaysList = ({ days: { days } }) => {
  return (
    <div >
      {days && days.map(day => {
        return (
          <DayItem day={day} key={day.id}/>
        )}
      )}
    </div>
  )
}

export default DaysList

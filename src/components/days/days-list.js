import React from 'react'
import DayItem from './day-item'
import { Link } from 'react-router-dom'
import { StyledList } from './days.style';

const DaysList = ({ days }) => {
  return (
    <StyledList>
      {days && days.map(day => {
        return (
            <DayItem day={day} key={day.id}/>
        )}
      )}
    </StyledList>
  )
}

export default DaysList

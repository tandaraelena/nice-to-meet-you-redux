import React from 'react'
import { Paper } from '@material-ui/core'


const DayItem = ({ day }) => {
  return (
    <Paper>
      <span>Day number: {day.id}</span>
      <span>Day Description: {day.dayDescription}</span>
    </Paper>
  )
}

export default DayItem

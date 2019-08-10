import React from 'react'
import { Paper } from '@material-ui/core'


const DayDetails = ({day}) => {
  return (
    <Paper>
      <span>Day number: {day.dayNo}</span>
      <span>Day Description: {day.description}</span>
    </Paper>
  )
}

export default DayDetails

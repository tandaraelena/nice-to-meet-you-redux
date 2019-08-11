import React from 'react'
import { Paper } from '@material-ui/core'

const DayItem = ({day}) => {
  return (
    <Paper style={{marginBottom: '30px'}}>
      <span>Day number: {' ' + day.dayNo} </span>
      <span>Day Description: {' ' + day.description} </span>
    </Paper>
  )
}

export default DayItem

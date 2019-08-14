import React from 'react'
import { Paper } from '@material-ui/core'

const DayItem = ({day}) => {
  console.log(day)
  return (
    <Paper style={{marginBottom: '30px'}}>
      <div>Day number: {' ' + day.dayNo} </div>
      <div>Day title: {' ' + day.subtitle} </div>
      <div>Day Description: {' ' + day.description} </div>
      <i>Created by: {day.userName}</i>
      {/* <>{day.createdAt.Timestamp.seconds}</> */}
    </Paper>
  )
}

export default DayItem

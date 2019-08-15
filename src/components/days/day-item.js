import React from 'react'
import { Paper } from '@material-ui/core'
import moment from 'moment'

const DayItem = ({day}) => {
  console.log(day)
  return (
    <Paper style={{marginBottom: '30px'}}>
      <div>Day number: {' ' + day.dayNo} </div>
      <div>Day title: {' ' + day.subtitle} </div>
      <div>Day Description: {' ' + day.description} </div>
      <i>Created by: {day.userName}</i>
      <div>{moment(day.createdAt.toDate().toString()).format('lll')}</div>
    </Paper>
  )
}

export default DayItem

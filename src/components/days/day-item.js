import React from 'react'
import moment from 'moment'
import { StyledDayItem } from './days.style';

const DayItem = ({day}) => {
  console.log(day)
  return (
    <StyledDayItem>
      <div>{'#' + day.dayNo} {' ' + day.subtitle}</div>
      <div> {' ' + day.description} </div>
      <i style={{float: 'left'}}>Created by: {day.userName}</i>
      <div style={{float: 'right'}}>{moment(day.createdAt.toDate().toString()).format('lll')}</div>
    </StyledDayItem>
  )
}

export default DayItem

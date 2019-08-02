const createDay = (day) => {
  return (dispatch, getState) => {
    dispatch({ type: "CREATE_DAY", day })
  }
}

export default createDay

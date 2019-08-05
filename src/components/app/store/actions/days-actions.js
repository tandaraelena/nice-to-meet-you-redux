const createDay = (day) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    dispatch({ type: "CREATE_DAY", day })
  }
}

export default createDay

const createDay = (day) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore()
    const profile = getState().firebase.profile
    const authorId = getState().firebase.auth.uid

    firestore
      .collection('days').add({
        ...day,
        userName: profile.firstName + ' ' + profile.lastName[0],
        authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_DAY", day })
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_DAY_ERROR', err })
      })
  }
}

export default createDay

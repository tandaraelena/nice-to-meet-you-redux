const createDay = (day) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database
    const firestore = getFirestore()
    firestore
      .collection('days').add({
        ...day,
        dayNo: '3',
        description: 'blablablsaassfcdlg'
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

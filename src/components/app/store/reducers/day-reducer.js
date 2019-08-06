const initState = {
  days: [
    {id: '1', dayNumber: 'Day number 1', dayDescription: "In my first day I had a really great time" },
    {id: '2', dayNumber: 'Day number 2', dayDescription: "In my second day I had a really great time" },
    {id: '3', dayNumber: 'Day number 3', dayDescription: "In my third day I had a really great time" }
  ]
}

const dayReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_DAY":
      console.log("create day", action.day)
      return state
    case 'CREATE_DAY_ERROR':
      console.log('create day error:', action.error)
    default:
      return state
  }
}

export default dayReducer
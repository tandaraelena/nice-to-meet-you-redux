const initState = {
  days: [
    {id: '1', dayNumber: 'Day number 1', dayDescription: "In my first day I had a really great time" },
    {id: '2', dayNumber: 'Day number 2', dayDescription: "In my second day I had a really great time" },
    {id: '3', dayNumber: 'Day number 3', dayDescription: "In my third day I had a really great time" }
  ]
}

const dayReducer = (state = initState, action) => {
  return state
}

export default dayReducer
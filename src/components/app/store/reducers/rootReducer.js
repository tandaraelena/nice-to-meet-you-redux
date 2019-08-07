import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import dayReducer from './day-reducer'
import { firestoreReducer } from 'redux-firestore'

const rootReducer = combineReducers({
  auth: authReducer,
  day: dayReducer,
  firestore: firestoreReducer,
})

export default rootReducer
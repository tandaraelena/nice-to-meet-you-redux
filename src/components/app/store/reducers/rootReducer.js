import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import dayReducer from './day-reducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  day: dayReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
})

export default rootReducer
import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import dayReducer from './day-reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  day: dayReducer,
})

export default rootReducer
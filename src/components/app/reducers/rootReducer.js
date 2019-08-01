import { combineReducers } from 'redux'
import authReducer from './auth-reducer'
import dayReducer from './day-reducer'

const rootReducer = combineReducers({
  authReducer: authReducer,
  dayReducer: dayReducer,
})

export default rootReducer
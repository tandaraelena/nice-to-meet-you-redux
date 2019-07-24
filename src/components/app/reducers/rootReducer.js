import { combineReducers } from 'redux'
import testReducer from '../../testArea/testReducer';

const rootReducer = combineReducers({
  test: testReducer
})

export default rootReducer
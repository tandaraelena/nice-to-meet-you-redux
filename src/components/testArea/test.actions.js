import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './test-constants'

export const incrementCounter = () => (
  {
    type: INCREMENT_COUNTER
  }
)
export const decrementCounter = () => (
  {
    type: DECREMENT_COUNTER
  }
)
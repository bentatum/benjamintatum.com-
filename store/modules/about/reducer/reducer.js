import { INITIAL_STATE } from './config'
import * as types from '../actionTypes'
import { mergePayloadToState } from 'store/modules/lib'

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET:
      return mergePayloadToState(state, action)
    default:
      return state
  }
}

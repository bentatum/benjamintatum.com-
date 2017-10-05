import { get } from 'lodash'

export default (state, action) => {
  const payload = get(action, 'payload')
  return {
    ...state,
    ...payload
  }
}

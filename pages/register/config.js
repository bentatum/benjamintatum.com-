
import * as actions from 'store/modules/user/actions'

export const HANDLERS = {
  handleSubmit: require('./lib').handleSubmit
}

export const ACTIONS = {
  registerUser: actions.register
}

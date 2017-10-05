import { combineReducers } from 'redux'

const reducers = {
  about: require('./modules/about').reducer,
  form: require('redux-form').reducer,
  async: require('./modules/async').reducer,
  blog: require('./modules/blog').reducer
}

export default combineReducers(reducers)

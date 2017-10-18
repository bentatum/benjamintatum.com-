import * as types from '../actionTypes'
import { takeLatest, all } from 'redux-saga/effects'

export default function * () {
  yield all([
    takeLatest(types.REGISTER, require('./register').default)
  ])
}

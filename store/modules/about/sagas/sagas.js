import * as types from '../actionTypes'
import { takeLatest } from 'redux-saga/effects'

export default function * () {
  yield takeLatest(types.READ, require('./read').default)
}

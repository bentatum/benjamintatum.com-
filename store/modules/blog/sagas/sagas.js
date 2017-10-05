import * as types from '../actionTypes'
import { takeLatest, all } from 'redux-saga/effects'

export default function * () {
  yield all([
    takeLatest(types.READ_ONE, require('./readOne').default),
    takeLatest(types.READ_ALL, require('./readAll').default)
  ])
}

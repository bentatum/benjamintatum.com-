
import { sagas as about } from 'store/modules/about'
import { sagas as blog } from 'store/modules/blog'
import { all } from 'redux-saga/effects'

export default function * () {
  yield all([
    about(),
    blog()
  ])
}

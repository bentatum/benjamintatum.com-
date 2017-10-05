import { graphqlClient } from 'lib'
import { call, put } from 'redux-saga/effects'
import { pending, success, failure, error } from 'store/modules/async/actions'
import { READ } from '../actionTypes'
import { set } from '../actions'

export default function * (action) {
  try {
    yield put(pending(READ))

    const query = `
      {
        about {
          content
        }
      }
    `

    const res = yield call(graphqlClient, {
      method: 'post',
      url: 'graphql',
      data: { query }
    })

    const data = res.data.data.about

    yield put(success(READ))
    yield put(set(data))
  } catch (err) {
    yield put(error(READ, err))
    yield put(failure(READ))
  }
}

import { graphqlClient } from 'lib'
import { call, put } from 'redux-saga/effects'
import { pending, success, failure, error } from 'store/modules/async/actions'
import { READ_ONE } from '../actionTypes'
import { set } from '../actions'

export default function * ({ payload }) {
  try {
    yield put(pending(READ_ONE))

    const query = `
      {
        post(slug: "${payload}") {
          title
          slug
          created
          body
        }
      }
    `

    const res = yield call(graphqlClient, {
      method: 'post',
      url: 'graphql',
      data: { query }
    })

    const { post } = res.data.data

    yield put(success(READ_ONE))
    yield put(set({ single: post }))
  } catch (err) {
    yield put(error(READ_ONE, err))
    yield put(failure(READ_ONE))
  }
}

import { graphqlClient } from 'lib'
import { call, put } from 'redux-saga/effects'
import { pending, success, failure, error } from 'store/modules/async/actions'
import { READ_ALL } from '../actionTypes'
import { set } from '../actions'
import { groupBy, compact } from 'lodash'

export default function * (action) {
  try {
    yield put(pending(READ_ALL))

    const query = `
      {
        posts {
          body
          title
          slug
          short
        }
      }
    `

    const res = yield call(graphqlClient, {
      method: 'post',
      url: 'graphql',
      data: { query }
    })

    const posts = compact(res.data.data.posts)

    yield put(success(READ_ALL))
    yield put(set({ list: posts }))
  } catch (err) {
    yield put(error(READ_ALL, err))
    yield put(failure(READ_ALL))
  }
}

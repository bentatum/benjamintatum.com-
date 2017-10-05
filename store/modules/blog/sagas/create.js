
import { graphqlClient } from 'lib'
import { call, put } from 'redux-saga/effects'
import { pending, success, failure, error } from 'store/modules/async/actions'
import { CREATE } from '../actionTypes'

export default function * ({ payload }) {
  try {
    yield put(pending(CREATE))

    const query = `
      mutation {
        upsertPost(
          title: "${payload.title}"
          ${payload.slug ? `slug: "${payload.slug}"` : ''}
          body: "${payload.body}"
        ) {
          title
          slug
          body
        }
      }
    `

    yield call(graphqlClient, {
      method: 'post',
      url: 'graphql',
      data: { query }
    })

    yield put(success(CREATE))
  } catch (err) {
    yield put(error(CREATE, err))
    yield put(failure(CREATE))
  }
}

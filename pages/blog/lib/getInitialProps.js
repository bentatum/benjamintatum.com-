import { get } from 'lodash'
import { readAll, readOne } from 'store/modules/blog/actions'

export default async ({ store, query }) => {
  const { post } = query

  if (post) {
    await store.dispatch(readOne(post))
  } else {
    await store.dispatch(readAll())
  }
}

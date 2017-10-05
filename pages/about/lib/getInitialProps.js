
import { read } from 'store/modules/about/actions'

export default async ({ store }) => {
  const action = read()
  await store.dispatch(action)
  return {}
}

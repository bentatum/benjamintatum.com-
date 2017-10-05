
import { get } from 'lodash'

export default store => ({
  posts: get(store, 'blog.list'),
  post: get(store, 'blog.single')
})

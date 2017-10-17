
import { get } from 'lodash'

export default store => ({
  posts: get(store, 'blog.posts'),
  post: get(store, 'blog.post')
})

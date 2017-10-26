
import { get } from 'lodash'

export default props => {
  const slug = get(props, 'url.query.post')
  return {
    ...props,
    isPost: slug && slug === get(props, 'post.slug')
  }
}


import { get } from 'lodash'

export default props => {
  const style = {}
  const slug = get(props, 'post.type.slug')
  const query = get(props, 'url.query', {})

  if (slug && query.post) {
    style.backgroundImage = `url(${props.post.image})`
    style.backgroundSize = 'cover'
  }

  return {
    ...props,
    style
  }
}

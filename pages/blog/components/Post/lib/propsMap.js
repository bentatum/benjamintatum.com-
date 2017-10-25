
import { get } from 'lodash'

export default props => {
  const style = {}

  if (get(props, 'post.type.slug')) {
    style.backgroundImage = `url(${props.post.image})`
  }

  return {
    ...props,
    style
  }
}

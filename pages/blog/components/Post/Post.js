
import { markdown } from 'markdown'
import Typography from 'material-ui/Typography'

export default ({ post }) =>
  <div>
    <Typography type='title'>{post.title}</Typography>
    <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(post.body) }} />
  </div>
